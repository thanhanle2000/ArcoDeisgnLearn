import { memo } from "react";

import FilterCpn from "./Components/FilterCpn";
import { ELEMENT_ID } from "src/Core";
import TableUserManage from "./Components/TableUserManage";
import useViewModel from "./ListUserManageViewModel";
import WhiteContainer from "src/Core/Components/WhiteContainer";

function ListUserManage() {
    // FROM VIEWMODEL
    const { mockUserQuery, pagination, handleChangeTable, handleSearch } =
        useViewModel();

    return (
        <WhiteContainer>
            <div className="flex flex-col justify-start items-start">
                <div
                    id={ELEMENT_ID.TABLEFILTER}
                    className="w-full flex flex-col flex-wrap justify-center md:justify-between items-start"
                >
                    <div>
                        <FilterCpn handleSearch={handleSearch} />
                    </div>
                </div>
                <div className="w-full mt-TABLEMARGINTOP">
                    <TableUserManage
                        loading={mockUserQuery.isLoading}
                        data={mockUserQuery?.data?.data?.list}
                        handleChangeTable={handleChangeTable}
                        pagination={pagination}
                    />
                </div>
            </div>
        </WhiteContainer>
    );
}

export default memo(ListUserManage);
