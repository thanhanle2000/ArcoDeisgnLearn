import { memo, useMemo } from "react";

import { PaginationProps, Table } from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";

import { MockUser } from "src/Domain/Model/MockUser";
import GroupListCpn from "./GroupListCpn";
import IdCpn from "./IdCpn";
import StatusCpn from "./StatusCpn";
import { ELEMENT_ID } from "src/Core";
import ResizeTable from "./ResizeTable";
import tailwindConfig from "../../../../tailwind.config";

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
    // COLUMNS
    const columns: ColumnProps<MockUser>[] = useMemo(
        () =>
            [
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
                    width: 200,
                },
                {
                    key: "email",
                    title: "Email",
                    dataIndex: "email",
                    render: (_col, record) => (
                        <span className="block whitespace-nowrap">
                            {record?.email}
                        </span>
                    ),
                    width: 300,
                },
                {
                    key: "group_list",
                    title: "Phân quyền",
                    dataIndex: "group_list",
                    render: (_col, record) => (
                        <GroupListCpn GroupList={record?.group_list} />
                    ),
                },
                {
                    key: "status_label",
                    title: "Trạng thái",
                    dataIndex: "status_label",
                    render: (_col, record) => <StatusCpn mockUser={record} />,
                    // fixed: "right",
                },
            ] as ColumnProps<MockUser>[],
        []
    );

    // FIXX TABLE
    const fixxTable = useMemo(() => {
        const redundantBreadcrumb = 1;
        const tableMarginTop = parseInt(
            tailwindConfig?.theme?.extend?.spacing?.TABLEMARGINTOP,
            10
        );

        return redundantBreadcrumb + tableMarginTop;
    }, []);

    // RESIZEE TABLE
    const { components, resizableColumns, tableScrollY, tableWidth } =
        ResizeTable({ columns: columns, fixxTable });
    return (
        <div id={ELEMENT_ID?.TABLE}>
            <Table
                stripe
                loading={loading}
                columns={resizableColumns as ColumnProps<MockUser>[]}
                components={components}
                data={data}
                pagination={pagination}
                onChange={handleChangeTable}
                onRow={onRow}
                hover
                scroll={{
                    x: tableWidth,
                    y: tableScrollY,
                }}
                border
                className="[&_.arco-table-tr]:cursor-pointer [&_.arco-pagination]:w-full [&_.arco-pagination]:flex-wrap [&_.arco-pagination]:justify-start [&_.arco-pagination-list]:ml-auto [&_.arco-pagination-total-text]:h-auto [&_.arco-pagination-option]:hidden [&_.arco-pagination-option]:md:inline-block"
            />
        </div>
    );
}

export default memo(TableCpn);
