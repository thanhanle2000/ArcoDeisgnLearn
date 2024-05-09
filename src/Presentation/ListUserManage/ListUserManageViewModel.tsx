import { useCallback, useEffect, useState } from "react";

import { PaginationProps } from "@arco-design/web-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import {
    ASSETFILEPATHS,
    MockUserFilterProp,
    TANSTACKQUERYKEYS,
    mockUserFilter,
} from "src/Core";
import MockUserApiDataSourceImpl from "src/Data/DataSource/Api/MockUserAPIDataSourceImpl";
import { MockUserRepositoryImpl } from "src/Data/Repository/MockUserRepositoryImpl";
import { ListMockUser } from "src/Domain/Model/MockUser";
import { GetMockUsers } from "src/Domain/UseCase/MockUser/GetMockUsers";
import tailwindConfig from "../../../tailwind.config";
import useDebouncedFunction from "src/Core/Hooks/useDebounceFunc";

function ListUserManageViewModel() {
    // QUERY CLIENT
    const queyClient = useQueryClient();

    // LIMIT
    const [limit, setLimit] = useState(
        window.innerWidth > parseInt(tailwindConfig.theme.screens.md, 10)
            ? 20
            : 10
    );

    // FILTER DATA
    const [filterData, setFilterData] = useState<MockUserFilterProp>({
        searchValue: "",
    });

    // PAGINATION CONFIG
    const [pagination, setPagination] = useState<PaginationProps>({
        sizeCanChange: true,
        showTotal: true,
        total: 0,
        pageSize: limit,
        current: 1,
        pageSizeChangeResetCurrent: true,
        onPageSizeChange: (size) => setLimit(size),
    });

    // IMPL
    const mockUserApiDataSourceImpl = new MockUserApiDataSourceImpl();
    const mockUserRepositoryImpl = new MockUserRepositoryImpl(
        mockUserApiDataSourceImpl
    );

    // USE CASES
    const getMockUsersUseCase = new GetMockUsers(mockUserRepositoryImpl);

    const handleChangeLimitOnResize = useDebouncedFunction(() => {
        const newLimit =
            window.innerWidth > parseInt(tailwindConfig.theme.screens.md, 10)
                ? 20
                : 10;
        setLimit(newLimit);
    }, 100);

    // USE EFFECT
    useEffect(() => {
        queyClient.invalidateQueries({
            queryKey: [
                TANSTACKQUERYKEYS.MOCKUSERS,
                pagination.current,
                filterData.searchValue,
            ],
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterData.searchValue, limit]);

    useEffect(() => {
        window.addEventListener("resize", () => handleChangeLimitOnResize());

        return () => {
            window.removeEventListener("resize", () =>
                handleChangeLimitOnResize()
            );
        };
    }, [handleChangeLimitOnResize]);

    // HANDLE GET USER AND FILTER
    const handleGetAndFilterMockUsers = useCallback(
        async (page?: number): Promise<ListMockUser> => {
            const allUsers = await getMockUsersUseCase.invoke(
                ASSETFILEPATHS.USERLISTMOCKDATA
            );

            allUsers.data.list = mockUserFilter(allUsers.data.list, filterData);

            const total = allUsers.data.list.length;
            const maxPage = Math.ceil(total / limit);

            setPagination((prev) => ({
                ...prev,
                current: (prev.current || 1) <= maxPage ? prev.current : 1,
                total,
            }));

            if (page !== undefined) {
                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;
                allUsers.data.list = allUsers.data.list.slice(
                    startIndex,
                    endIndex
                );
            }
            return { ...allUsers, data: { ...allUsers.data, total } };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [limit, filterData]
    );

    // USE QUERY
    const mockUserQuery = useQuery({
        queryKey: [
            TANSTACKQUERYKEYS.MOCKUSERS,
            pagination.current,
            limit,
            filterData.searchValue,
        ],
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

    // HANDLE SEARCH
    const handleSearch = useCallback((value: string) => {
        setFilterData((prev) => ({ ...prev, searchValue: value }));
    }, []);

    return {
        mockUserQuery,
        pagination,
        setFilterData,
        handleChangeTable,
        handleSearch,
    };
}

export default ListUserManageViewModel;
