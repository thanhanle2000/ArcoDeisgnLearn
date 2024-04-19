import { memo } from "react";

import FilterCpn from "./Components/FilterCpn";
import TableCpn from "./Components/TableCpn";
import useViewModel from "./ListUserManageViewModel";
import MockUserInfoDrawer from "src/Core/Components/Drawer/MockUserInfoDrawer";
import { ELEMENT_ID } from "src/Core";

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
                <div
                    id={ELEMENT_ID.TABLEFILTER}
                    className="w-full flex flex-col flex-wrap justify-center md:justify-between items-start"
                >
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
