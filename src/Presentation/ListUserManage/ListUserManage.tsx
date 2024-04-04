import { memo } from "react";

import { Typography } from "@arco-design/web-react";

import FilterCpn from "./Components/FilterCpn";
import TableCpn from "./Components/TableCpn";
import useViewModel from "./ListUserManageViewModel";
import MockUserInfoDrawer from "src/Core/Components/Drawer/MockUserInfoDrawer";

function ListUserManage() {
    // FROM VIEWMODEL
    const {
        mockUserQuery,
        pagination,
        handleChangeTable,
        visibleDrawer,
        handleSetVisible,
        onRow,
        handleSearch,
    } = useViewModel();

    return (
        <div className="bg-[color:var(--color-bg-1)] p-5">
            <div className="flex flex-col justify-start items-start">
                <Typography className={`mb-2`}>User Manage Table</Typography>
                <FilterCpn handleSearch={handleSearch} />
                <div className="w-full mt-4">
                    <TableCpn
                        data={mockUserQuery.data?.data.list}
                        pagination={pagination}
                        loading={mockUserQuery.isLoading}
                        handleChangeTable={handleChangeTable}
                        onRow={onRow}
                    />
                </div>
            </div>
            <MockUserInfoDrawer
                data={visibleDrawer?.data}
                visible={visibleDrawer?.isVisible}
                handleSetVisible={handleSetVisible}
            />
        </div>
    );
}

export default memo(ListUserManage);
