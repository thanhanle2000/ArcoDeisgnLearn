import { PaginationProps } from "@arco-design/web-react";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import {
    MockUserFilterProp,
    mockUserFilterByEmail,
    mockUserFilterByGroupList,
    mockUserFilterById,
    mockUserFilterByStatus,
    mockUserFilterByUsername,
} from "src/Core";

import MockUserApiDataSourceImpl from "src/Data/DataSource/Api/MockUserAPIDataSourceImpl";
import { MockUserRepositoryImpl } from "src/Data/Repository/MockUserRepositoryImpl";
import { ListMockUser, MockUser } from "src/Domain/Model/MockUser";
import { GetMockUsers } from "src/Domain/UseCase/MockUser/GetMockUsers";

interface VisibleDrawerInterface {
    isVisible: boolean;
    data: MockUser;
}

function ListUserManageViewModel() {
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

    // LIMIT
    const LIMIT = useMemo(() => 10, []);

    // FILTER DATA
    const [filterData, setFilterData] = useState<MockUserFilterProp>({
        id: undefined,
        user_name: "",
        email: "",
        status: "",
        group_ids: [],
    });
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

    // HANDLE GET USER AND FILTER
    const handleGetAndFilterMockUsers = async (
        page?: number
    ): Promise<ListMockUser> => {
        const allUsers = await getMockUsersUseCase.invoke("/userList.json");

        allUsers.data.list = mockUserFilterById(
            allUsers.data.list,
            filterData.id
        );
        allUsers.data.list = mockUserFilterByUsername(
            allUsers.data.list,
            filterData.user_name
        );
        allUsers.data.list = mockUserFilterByEmail(
            allUsers.data.list,
            filterData.email
        );
        allUsers.data.list = mockUserFilterByStatus(
            allUsers.data.list,
            filterData.status
        );
        allUsers.data.list = mockUserFilterByGroupList(
            allUsers.data.list,
            filterData.group_ids
        );

        const total = allUsers.data.list.length;

        if (page !== undefined) {
            const startIndex = (page - 1) * LIMIT;
            const endIndex = page * LIMIT;
            allUsers.data.list = allUsers.data.list.slice(startIndex, endIndex);
        }
        return { ...allUsers, data: { ...allUsers.data, total } };
    };

    // USE QUERY
    const mockUserQuery = useQuery({
        queryKey: [
            "mockUsers",
            pagination.current,
            filterData.id,
            filterData.user_name,
            filterData.email,
            filterData.status,
            filterData.group_ids,
        ],
        queryFn: async () => {
            const users = await handleGetAndFilterMockUsers(pagination.current);
            setPagination((prev) => ({
                ...prev,
                total: users.data.total,
            }));
            return users;
        },
        staleTime: 1000 * 10,
        keepPreviousData: true,
        retry: 0,
    });

    // HANDLE CHANGE PAGE
    const handleChangeTable = (pagination: PaginationProps) => {
        const { current, pageSize } = pagination || {};
        if (current !== undefined && pageSize !== undefined) {
            setPagination((pagination) => ({
                ...pagination,
                current,
                pageSize,
            }));
        }
    };

    // HANDLE SETVISIBLE
    const handleSetVisible = (isVisible: boolean) =>
        setVisibleDrawer((prev) => ({
            ...prev,
            isVisible: isVisible,
        }));

    // ROW CALLBACK PROPS
    const onRow = (record: MockUser): RowCallbackProps => {
        return {
            onClick: () => {
                setVisibleDrawer({
                    isVisible: true,
                    data: record,
                });
            },
        };
    };

    return {
        visibleDrawer,
        mockUserQuery,
        pagination,
        setFilterData,
        onRow,
        handleChangeTable,
        handleSetVisible,
    };
}

export default ListUserManageViewModel;
