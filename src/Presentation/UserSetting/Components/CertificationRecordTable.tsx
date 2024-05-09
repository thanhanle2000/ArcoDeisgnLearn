import { memo, useMemo } from "react";

import { Badge, Button, Table } from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";

import { ELEMENT_ID } from "src/Core";
import ResizeTable from "src/Core/Components/ResizeTable";
import { useHeightElement } from "src/Core/Hooks/useHeightElement";

interface CRData {
    AuthenticationType: string;
    AuthenticationContent: string;
    CurrentStatus: string;
    CreatedTime: string;
}

function CertificationRecordTable() {
    // DATA
    const data: CRData[] = [
        {
            AuthenticationType: "企业证件认证",
            AuthenticationContent: "企业证件认证，法人姓名范**",
            CurrentStatus: "under review",
            CreatedTime: "1971-12-10 12:06:32",
        },
        {
            AuthenticationType: "企业证件认证",
            AuthenticationContent: "企业证件认证，法人姓名夏**",
            CurrentStatus: "under review",
            CreatedTime: "1989-01-09 10:28:53",
        },
        {
            AuthenticationType: "企业证件认证",
            AuthenticationContent: "企业证件认证，法人姓名马**",
            CurrentStatus: "under review",
            CreatedTime: "2003-04-29 21:41:34",
        },
        {
            AuthenticationType: "企业证件认证",
            AuthenticationContent: "企业证件认证，法人姓名范**",
            CurrentStatus: "under review",
            CreatedTime: "1971-12-10 12:06:32",
        },
        {
            AuthenticationType: "企业证件认证",
            AuthenticationContent: "企业证件认证，法人姓名夏**",
            CurrentStatus: "under review",
            CreatedTime: "1989-01-09 10:28:53",
        },
        {
            AuthenticationType: "企业证件认证",
            AuthenticationContent: "企业证件认证，法人姓名马**",
            CurrentStatus: "under review",
            CreatedTime: "2003-04-29 21:41:34",
        },
    ];

    // COLUMNS
    const columns: ColumnProps<CRData>[] = useMemo(
        () =>
            [
                {
                    key: "authentication-type",
                    title: "Authentication type",
                    dataIndex: "AuthenticationType",
                },
                {
                    key: "authentication-content",
                    title: "Authentication content",
                    dataIndex: "AuthenticationContent",
                },
                {
                    key: "current-status",
                    title: "Current status",
                    dataIndex: "CurrentStatus",
                    render: (_col: any, record: CRData) => (
                        <Badge
                            status="processing"
                            text={record?.CurrentStatus}
                        />
                    ),
                },
                {
                    key: "created-time",
                    title: "Created time",
                    dataIndex: "CreatedTime",
                },
                {
                    key: "operation",
                    title: "Operation",
                    dataIndex: "Operation",
                    render: () => (
                        <div className="flex flex-row justify-start items-center gap-2">
                            <Button type="text">View</Button>
                            <Button type="text">Revoke</Button>
                        </div>
                    ),
                },
            ] as ColumnProps<CRData>[],
        []
    );

    const tabContainerHeight = useHeightElement([
        `#${ELEMENT_ID?.USERSETTINGTABCONTAINER}`,
    ]);
    const thisTableHeight = useHeightElement([
        `#${ELEMENT_ID?.CERTIFICATIONRECORDSTABLE}`,
    ]);
    const userInfoHeight = useHeightElement([
        `#${ELEMENT_ID?.USERSETTINGINFO}`,
    ]);

    // FIXX TABLE
    const fixxTable = useMemo(() => {
        const redundantBreadcrumb = 1;
        return (
            redundantBreadcrumb +
            (tabContainerHeight - thisTableHeight) +
            userInfoHeight
        );
    }, [tabContainerHeight, thisTableHeight, userInfoHeight]);

    // RESIZEE TABLE
    const { components, resizableColumns, tableScrollY, tableWidth } =
        ResizeTable({
            tableId: ELEMENT_ID?.CERTIFICATIONRECORDSTABLE,
            columns: columns,
            fixxTable,
        });

    return (
        <div id={ELEMENT_ID?.CERTIFICATIONRECORDSTABLE} className="w-full">
            <Table
                stripe
                columns={resizableColumns as ColumnProps<CRData>[]}
                components={components}
                data={data}
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

export default memo(CertificationRecordTable);
