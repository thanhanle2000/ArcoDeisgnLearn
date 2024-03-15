import {
    Badge,
    Button,
    Message,
    PaginationProps,
    Table,
} from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";
import {
    IconCopy,
    IconFileVideo,
    IconImage,
} from "@arco-design/web-react/icon";
import { ListSearchTableItem } from "src/Core";

interface Props {
    loading: boolean;
    data: any;
    pagination?: PaginationProps;
    handleChangeTable: (pagination: PaginationProps) => void;
}

function TableCpn({ loading, data, pagination, handleChangeTable }: Props) {
    const columns: ColumnProps<ListSearchTableItem>[] = [
        {
            key: "collectionId",
            title: "Collection ID",
            dataIndex: "collectionId",
            render: (_col, record) => (
                <div className="flex flex-row ">
                    <span>{record.collectionId}</span>
                    <IconCopy
                        className="ms-1 cursor-pointer"
                        onClick={() => {
                            navigator.clipboard.writeText(record.collectionId);
                            Message.info(`Copied ${record.collectionId}`);
                        }}
                    />
                </div>
            ),
        },
        {
            key: "collectionName",
            title: "Collection Name",
            dataIndex: "collectionName",
        },
        {
            key: "contentGenre",
            title: "Content Genre",
            dataIndex: "contentGenre",
            render: (_col, record) => (
                <div className="flex flex-row items-center">
                    {record.contentGenre === "Video" ? (
                        <IconFileVideo />
                    ) : (
                        <IconImage />
                    )}
                    <span className="ms-1">{record.contentGenre}</span>
                </div>
            ),
        },
        {
            key: "filterMethod",
            title: "Filter method",
            dataIndex: "filterMethod",
        },
        {
            key: "contentQuantity",
            title: "Content quantity",
            dataIndex: "contentQuantity",
            sorter: {
                compare: (a, b) => a.contentQuantity - b.contentQuantity,
                multiple: 3,
            },
        },
        {
            key: "creationTime",
            title: "Creation time",
            dataIndex: "creationTime",
            sorter: (a, b) => {
                if (a.creationTime > b.creationTime) {
                    return 1;
                }
                if (a.creationTime < b.creationTime) {
                    return -1;
                }
                return 0;
            },
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: (_col, record) => (
                <div className="flex flex-row items-center">
                    {record.status === "ok" ? (
                        <Badge status="success" />
                    ) : (
                        <Badge status="error" />
                    )}
                    <span className="ms-2">{record.status}</span>
                </div>
            ),
        },
        {
            key: "operation",
            title: "Operation",
            dataIndex: "operation",
            render: () => <Button type="text">View</Button>,
        },
    ];
    return (
        <Table
            loading={loading}
            columns={columns}
            data={data}
            pagination={pagination}
            onChange={handleChangeTable}
        />
    );
}

export default TableCpn;
