import { Badge, Message, PaginationProps, Table } from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";
import { IconCopy } from "@arco-design/web-react/icon";
import { MouseEvent, useMemo } from "react";
import { MockUser } from "src/Domain/Model/MockUser";

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
                            className="ms-1 cursor-copy"
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
                    <div className="flex flex-row">
                        {record.group_list.map((group, index) => {
                            return index < record.group_list.length ? (
                                <>
                                    <span
                                        key={group.id}
                                        className={`${
                                            index === 0 ? "" : "ms-2"
                                        }`}
                                    >
                                        {group.name}
                                    </span>
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

    return (
        <Table
            loading={loading}
            columns={columns}
            data={data}
            pagination={pagination}
            onChange={handleChangeTable}
            onRow={onRow}
            hover
            className="[&_.arco-table-tr]:cursor-pointer"
        />
    );
}

export default TableCpn;
