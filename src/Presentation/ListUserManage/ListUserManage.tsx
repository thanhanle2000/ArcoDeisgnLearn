import { memo } from "react";

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
        <div
            className={`bg-[color:var(--color-bg-1)] overflow-hidden px-STANDARDCONTAINERPADDINGX py-STANDARDCONTAINERPADDINGY`}
        >
            <div className="flex flex-col justify-start items-start">
                <div className="w-full flex flex-row flex-wrap justify-center md:justify-between items-center">
                    <div>
                        <p className="">User Manage Table</p>
                    </div>
                    <div>
                        <FilterCpn handleSearch={handleSearch} />
                    </div>
                </div>
                <div className="w-full mt-TABLEMARGINTOP">
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
