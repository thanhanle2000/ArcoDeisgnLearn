import {
    Badge,
    Message,
    PaginationProps,
    Table,
    Tag,
} from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";
import { IconCopy } from "@arco-design/web-react/icon";
import { MouseEvent, useMemo } from "react";
import { MockUser } from "src/Domain/Model/MockUser";
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
    const columns: ColumnProps<MockUser>[] = useMemo(
        () => [
            {
                key: "id",
                title: "ID",
                dataIndex: "id",
                render: (_col, record) => (
                    <div className="flex flex-row ">
                        <span>{record.id}</span>
                        <IconCopy
                            className="cursor-copy"
                            onClick={(e: MouseEvent<SVGElement>) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(
                                    record.id.toString()
                                );
                                Message.info(`Copied ${record.id}`);
                            }}
                        />
                    </div>
                ),
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
                    <div className="flex flex-row flex-wrap justify-start">
                        {record.group_list.map((group, index) => {
                            return index < record.group_list.length ? (
                                <>
                                    <Tag
                                        className={`${
                                            index === 0 ? "" : "xl:ms-2"
                                        }`}
                                        bordered
                                    >
                                        {group.name}
                                    </Tag>
                                </>
                            ) : (
                                <span key={group.id}>{group.name}</span>
                            );
                        })}
                    </div>
                ),
            },
            {
                key: "status_label",
                title: "Trạng thái",
                dataIndex: "status_label",
                render: (_col, record) => (
                    <div className="flex flex-row items-center">
                        {record.status === "Active" ? (
                            <Badge status="success" />
                        ) : (
                            <Badge status="error" />
                        )}
                        <span className="ms-2">{record.status_label.text}</span>
                    </div>
                ),
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
            parseInt(
                tailwindConfig.theme.extend.spacing.TABLEFILTERHEIGHT,
                10
            ) -
            parseInt(tailwindConfig.theme.extend.spacing.TABLEMARGINTOP, 10) -
            parseInt(tailwindConfig.theme.extend.spacing.TABLEHEAD, 10) -
            parseInt(tailwindConfig.theme.extend.spacing.TABLEPAGINATION, 10)
        );
    }, []);

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

export default TableCpn;
