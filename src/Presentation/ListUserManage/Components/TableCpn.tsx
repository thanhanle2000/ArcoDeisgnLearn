import { PaginationProps, Table } from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";
import { memo, useEffect, useMemo, useState } from "react";
import { MockUser } from "src/Domain/Model/MockUser";
import tailwindConfig from "../../../../tailwind.config";
import GroupListCpn from "./GroupListCpn";
import IdCpn from "./IdCpn";
import StatusCpn from "./StatusCpn";
import { useAppContext } from "src/Core/Hooks/appContext";
import { USECONTEXT_HEIGHT_ID } from "src/Core";

interface Props {
    loading: boolean;
    data: any;
    pagination?: PaginationProps;
    handleChangeTable: (pagination: PaginationProps) => void;
    onRow?: (record: MockUser, index: number) => RowCallbackProps;
}

function TableCpn({
    loading,
    data,
    pagination,
    handleChangeTable,
    onRow,
}: Props) {
    // STATE
    const [theadHeight, setTheadHeight] = useState<number | null>(null);
    const [tablePaginationHeight, setTablePaginationHeight] = useState<
        number | null
    >(null);

    // COLUMNS
    const columns: ColumnProps<MockUser>[] = useMemo(
        () => [
            {
                key: "id",
                title: "ID",
                dataIndex: "id",
                render: (_col, record) => <IdCpn mockUser={record} />,
            },
            {
                key: "user_name",
                title: "Tên",
                dataIndex: "user_name",
            },
            {
                key: "email",
                title: "Email",
                dataIndex: "email",
            },
            {
                key: "group_list",
                title: "Phân quyền",
                dataIndex: "group_list",
                render: (_col, record) => (
                    <GroupListCpn GroupList={record.group_list} />
                ),
            },
            {
                key: "status_label",
                title: "Trạng thái",
                dataIndex: "status_label",
                render: (_col, record) => <StatusCpn mockUser={record} />,
            },
        ],
        []
    );

    // GET HEIGHTs FROM APP CONTEXT
    const { heights } = useAppContext();

    // CALCULATE TABLE SCROLL Y
    const tableScrollY = useMemo(() => {
        return theadHeight && tablePaginationHeight
            ? window.innerHeight -
                  heights[USECONTEXT_HEIGHT_ID.HEADER] -
                  heights[USECONTEXT_HEIGHT_ID.BREADCRUMB] -
                  2 *
                      parseInt(
                          tailwindConfig.theme.extend.spacing
                              .STANDARDCONTAINERPADDINGY,
                          10
                      ) -
                  heights[USECONTEXT_HEIGHT_ID.TABLEFILTER] -
                  parseInt(
                      tailwindConfig.theme.extend.spacing.TABLEMARGINTOP,
                      10
                  ) -
                  theadHeight -
                  tablePaginationHeight
            : 0;
    }, [heights, tablePaginationHeight, theadHeight]);

    const divId = "userManageTableContainer";

    // USEEFFECT
    useEffect(() => {
        if (!loading) {
            const thead = document.querySelector(
                `#${divId} .arco-table-header`
            );

            const tablePagination = document.querySelector(
                `#${divId}  .arco-table-pagination`
            );

            if (thead && tablePagination) {
                const theadStyle = window.getComputedStyle(thead);
                setTheadHeight(parseInt(theadStyle.height, 10));

                const tablePaginationStyle =
                    window.getComputedStyle(tablePagination);
                setTablePaginationHeight(
                    parseInt(tablePaginationStyle.height, 10)
                );
            }
        }
    }, [loading]);

    return (
        <div id={divId}>
            <Table
                stripe
                virtualized
                loading={loading}
                columns={columns}
                data={data}
                pagination={pagination}
                onChange={handleChangeTable}
                onRow={onRow}
                hover
                scroll={{
                    x: true,
                    y: tableScrollY,
                }}
                className="[&_.arco-table-tr]:cursor-pointer [&_.arco-pagination]:w-full [&_.arco-pagination]:flex-wrap [&_.arco-pagination]:justify-start [&_.arco-pagination-list]:ml-auto [&_.arco-pagination-total-text]:h-auto"
            />
        </div>
    );
}

export default memo(TableCpn);
