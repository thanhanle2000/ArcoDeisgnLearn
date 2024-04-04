import { PaginationProps } from "@arco-design/web-react";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MockUserFilterProp, mockUserFilter } from "src/Core";

import MockUserApiDataSourceImpl from "src/Data/DataSource/Api/MockUserAPIDataSourceImpl";
import { MockUserRepositoryImpl } from "src/Data/Repository/MockUserRepositoryImpl";
import { ListMockUser, MockUser } from "src/Domain/Model/MockUser";
import { GetMockUsers } from "src/Domain/UseCase/MockUser/GetMockUsers";

interface VisibleDrawerInterface {
    isVisible: boolean;
    data: MockUser;
}

function ListUserManageViewModel() {
    // QUERY CLIENT
    const queyClient = useQueryClient();

    // STATE
    const [visibleDrawer, setVisibleDrawer] = useState<VisibleDrawerInterface>({
        isVisible: false,
        data: {
            user_name: "",
            full_name: "",
            email: "",
            phone: "",
            address: "",
            status: "",
            status_label: {
                value: "",
                text: "",
                label: "",
            },
            groups: "",
            group_list: [],
            id: 0,
            created_at: "",
            updated_at: "",
            updated_by: "",
        },
    });

    // FILTER DATA
    const [filterData, setFilterData] = useState<MockUserFilterProp>({
        searchValue: "",
    });

    // LIMIT
    const LIMIT = useMemo(() => 10, []);

    // PAGINATION CONFIG
    const [pagination, setPagination] = useState<PaginationProps>({
        sizeCanChange: true,
        showTotal: true,
        total: 0,
        pageSize: LIMIT,
        current: 1,
        pageSizeChangeResetCurrent: true,
    });

    // IMPL
    const mockUserApiDataSourceImpl = new MockUserApiDataSourceImpl();
    const mockUserRepositoryImpl = new MockUserRepositoryImpl(
        mockUserApiDataSourceImpl
    );

    // USE CASES
    const getMockUsersUseCase = new GetMockUsers(mockUserRepositoryImpl);

    // USEEFFECT
    useEffect(() => {
        queyClient.invalidateQueries({
            queryKey: ["mockUsers", pagination.current, filterData.searchValue],
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterData.searchValue]);

    // HANDLE GET USER AND FILTER
    const handleGetAndFilterMockUsers = useCallback(
        async (page?: number): Promise<ListMockUser> => {
            const allUsers = await getMockUsersUseCase.invoke("/userList.json");

            allUsers.data.list = mockUserFilter(allUsers.data.list, filterData);

            const total = allUsers.data.list.length;
            const maxPage = Math.ceil(total / LIMIT);

            setPagination((prev) => ({
                ...prev,
                current: (prev.current || 1) <= maxPage ? prev.current : 1,
                total,
            }));
            console.log("list", allUsers.data.list);

            if (page !== undefined) {
                const startIndex = (page - 1) * LIMIT;
                const endIndex = page * LIMIT;
                allUsers.data.list = allUsers.data.list.slice(
                    startIndex,
                    endIndex
                );
            }
            return { ...allUsers, data: { ...allUsers.data, total } };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [LIMIT, filterData]
    );
    console.log("re render");

    // USE QUERY
    const mockUserQuery = useQuery({
        queryKey: ["mockUsers", pagination.current, filterData.searchValue],
        queryFn: async () => {
            return handleGetAndFilterMockUsers(pagination.current);
        },
        staleTime: 1000 * 10,
        keepPreviousData: true,
        retry: 0,
    });

    // HANDLE CHANGE PAGE
    const handleChangeTable = useCallback((pagination: PaginationProps) => {
        const { current, pageSize } = pagination || {};
        if (current !== undefined && pageSize !== undefined) {
            setPagination((pagination) => ({
                ...pagination,
                current,
                pageSize,
            }));
        }
    }, []);

    // HANDLE SETVISIBLE
    const handleSetVisible = useCallback(
        (isVisible: boolean) =>
            setVisibleDrawer((prev) => ({
                ...prev,
                isVisible: isVisible,
            })),
        []
    );

    // HANDLE SEARCH
    const handleSearch = useCallback((value: string) => {
        setFilterData((prev) => ({ ...prev, searchValue: value }));
    }, []);

    // ROW CALLBACK PROPS
    const onRow = useCallback((record: MockUser): RowCallbackProps => {
        return {
            onClick: () => {
                setVisibleDrawer({
                    isVisible: true,
                    data: record,
                });
            },
        };
    }, []);

    return {
        visibleDrawer,
        mockUserQuery,
        pagination,
        setFilterData,
        onRow,
        handleChangeTable,
        handleSetVisible,
        handleSearch,
    };
}

export default ListUserManageViewModel;
