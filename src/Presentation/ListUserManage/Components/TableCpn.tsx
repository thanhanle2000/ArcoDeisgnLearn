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
    const [theadHeight, setTheadHeight] = useState<number>(0);
    const [tablePaginationHeight, setTablePaginationHeight] =
        useState<number>(0);

    // COLUMNS
    const columns: ColumnProps<MockUser>[] = useMemo(
        () => [
            {
                key: "id",
                title: "ID",
                dataIndex: "id",
                render: (_col: any, record: MockUser) => (
                    <IdCpn mockUser={record} />
                ),
                width: 80,
                fixed: "left" as const,
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
                // minWidth: 200,
            },
            {
                key: "status_label",
                title: "Trạng thái",
                dataIndex: "status_label",
                render: (_col, record) => <StatusCpn mockUser={record} />,
                fixed: "right",
            },
        ],
        []
    );

    // GET HEIGHTs FROM APP CONTEXT
    const { heights } = useAppContext();

    // CALCULATE TABLE SCROLL Y
    const tableScrollY = useMemo(() => {
        console.log(
            parseInt(tailwindConfig.theme.extend.spacing.TABLEMARGINTOP, 10),
            "tailwindConfig.theme.extend.spacing.TABLEMARGINTOP,"
        );
        console.log(
            parseInt(
                tailwindConfig.theme.extend.spacing.STANDARDCONTAINERPADDINGY,
                10
            ),
            "tailwindConfig.theme.extend.spacing.STANDARDCONTAINERPADDINGY,"
        );

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
                  tablePaginationHeight -
                  10
            : 0;
    }, [heights, tablePaginationHeight, theadHeight]);
    console.log(heights, tablePaginationHeight, theadHeight);

    // CONSTANTS
    const divId = "userManageTableContainer";
    const activeStickyWidth = parseInt(tailwindConfig.theme.screens.md, 10);

    // USEEFFECT
    useEffect(() => {
        if (!loading) {
            const thead =
                document.querySelector(`#${divId} .arco-table-header`) ||
                document.querySelector(`#${divId} thead`);

            const tablePagination = document.querySelector(
                `#${divId}  .arco-table-pagination`
            );

            if (
                thead instanceof HTMLElement &&
                tablePagination instanceof HTMLElement
            ) {
                const tHeadMargin = {
                    top: parseInt(thead.style.marginTop, 10) || 0,
                    bottom: parseInt(thead.style.marginBottom, 10) || 0,
                };
                const tablePaginationMargin = {
                    top: parseInt(tablePagination.style.marginTop, 10) || 0,
                    bottom:
                        parseInt(tablePagination.style.marginBottom, 10) || 0,
                };
                console.log(thead.offsetHeight, "offsetHeight");

                setTheadHeight(
                    thead.offsetHeight + tHeadMargin.top + tHeadMargin.bottom
                );
                setTablePaginationHeight(
                    tablePagination.offsetHeight +
                        tablePaginationMargin.top +
                        tablePaginationMargin.bottom
                );
            }
        }
    }, [loading]);

    // const getData = (): resizeDataType<ColumnProps<MockUser>> => ({
    //     columns: columns,
    //     minWidth: 500,
    //     maxWidth: 800,
    // });
    // const { components } = useAntdColumnResize(getData, []);

    // console.log(components);

    return (
        <div id={divId}>
            <Table
                stripe
                virtualized={
                    window.innerWidth > activeStickyWidth ? true : undefined
                }
                loading={loading}
                columns={columns}
                data={data}
                pagination={pagination}
                onChange={handleChangeTable}
                onRow={onRow}
                hover
                scroll={{
                    x: 768,
                    y: tableScrollY,
                }}
                border
                className={`[&_.arco-table-body]:min-w-[768px] ${
                    window.innerWidth > activeStickyWidth
                        ? "[&_.arco-table-body]:!overflow-scroll"
                        : "[&_.arco-table-body]:!overflow-visible"
                } [&_.arco-table-header]:overflow-x-visible [&_.arco-table-header]:!overflow-y-visible [&_.arco-table-tr]:cursor-pointer [&_.arco-pagination]:w-full [&_.arco-pagination]:flex-wrap [&_.arco-pagination]:justify-start [&_.arco-pagination-list]:ml-0 [&_.arco-pagination-list]:md:ml-auto [&_.arco-pagination-total-text]:h-auto [&_.arco-pagination-option]:hidden [&_.arco-pagination-option]:md:inline-block`}
            />
        </div>
    );
}

export default memo(TableCpn);
