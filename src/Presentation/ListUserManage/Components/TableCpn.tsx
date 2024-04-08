import { PaginationProps, Table } from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";
import { memo, useMemo } from "react";
import { MockUser } from "src/Domain/Model/MockUser";
import tailwindConfig from "../../../../tailwind.config";
import GroupListCpn from "./GroupListCpn";
import IdCpn from "./IdCpn";
import StatusCpn from "./StatusCpn";

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

    const tableScrollY = useMemo(() => {
        return (
            window.innerHeight -
            parseInt(tailwindConfig.theme.extend.spacing.HEADERHEIGHT, 10) -
            parseInt(tailwindConfig.theme.extend.spacing.BREADCRUMBHEIGHT, 10) -
            2 *
                parseInt(
                    tailwindConfig.theme.extend.spacing
                        .STANDARDCONTAINERPADDINGY,
                    10
                ) -
            parseInt(tailwindConfig.theme.extend.spacing.TABLEFILTERHEIGHT) -
            parseInt(tailwindConfig.theme.extend.spacing.TABLEMARGINTOP, 10) -
            parseInt(tailwindConfig.theme.extend.spacing.TABLEHEAD, 10) -
            parseInt(tailwindConfig.theme.extend.spacing.TABLEPAGINATION, 10)
        );
    }, []);
    console.log(window.innerHeight - tableScrollY);

    return (
        <Table
            virtualized
            loading={loading}
            columns={columns}
            data={data}
            pagination={pagination}
            onChange={handleChangeTable}
            onRow={onRow}
            hover
            scroll={{
                x: 1000,
                y: tableScrollY,
            }}
            className="[&_.arco-table-tr]:cursor-pointer [&_.arco-pagination]:w-full [&_.arco-pagination]:flex-wrap [&_.arco-pagination]:justify-start [&_.arco-pagination-list]:ml-auto [&_.arco-pagination-total-text]:h-auto"
        />
    );
}

export default memo(TableCpn);
