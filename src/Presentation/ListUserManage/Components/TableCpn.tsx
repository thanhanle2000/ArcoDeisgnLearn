import { memo, useEffect, useMemo, useState } from "react";

import { ColumnProps } from "@arco-design/web-react/es/Table";
import { useHeightElement } from "src/Core/Hooks/useHeightElement";
import { PaginationProps, Table } from "@arco-design/web-react";
import { ComponentsProps } from "@arco-design/web-react/es/Table/interface";
import { Column } from "react-antd-column-resize/dist/useAntdColumnResize/types";

import { ELEMENT_ID } from "src/Core";
import tailwindConfig from "../../../../tailwind.config";
import ResizeTable from "src/Core/Components/ResizeTable";
import { MockUser } from "src/Domain/Model/MockUser";
import ResizableTitle from "src/Core/Components/ResizableTitle";

interface Props {
    loading: boolean;
    data: any;
    columns: ColumnProps<MockUser>[];
    pagination: PaginationProps;
    handleChangeTable: (pagination: PaginationProps) => void;
}

function TableCpn({
    columns,
    data,
    loading,
    pagination,
    handleChangeTable,
}: Props) {
    // TABLE MARGIN
    const tableMarginTop = parseInt(
        tailwindConfig?.theme?.extend?.spacing?.TABLEMARGINTOP,
        10
    );
    const tableFilterHeight = useHeightElement([`#${ELEMENT_ID?.TABLEFILTER}`]);

    // FIXX TABLE
    const fixxTable = useMemo(() => {
        const redundantBreadcrumb = 1;

        return redundantBreadcrumb + tableMarginTop + tableFilterHeight;
    }, [tableFilterHeight, tableMarginTop]);

    // RESIZEE TABLE
    const { components, resizableColumns, tableScrollY, tableWidth } =
        ResizeTable({ tableId: ELEMENT_ID.TABLE, columns: columns, fixxTable });

    // STATE
    const [columnsResized, setColumnsResized] = useState<Column[]>([]);

    // USEEFFECT
    useEffect(() => {
        setColumnsResized(
            resizableColumns?.map((column, index) => {
                if ("width" in column) {
                    return {
                        ...column,
                        onHeaderCell: (col: any) => ({
                            width: col.width,
                            onResize: handleResize(index),
                        }),
                    };
                } else {
                    return column;
                }
            })
        );
    }, [resizableColumns]);

    // HANDLE RESIZE
    const handleResize = (index: number) => {
        return (_e: any, { size }: { size: any }) => {
            setColumnsResized((prevColumns) => {
                const nextColumns = [...prevColumns];
                nextColumns[index] = {
                    ...nextColumns[index],
                    width: size.width,
                };
                return nextColumns;
            });
        };
    };

    // COMPONENT
    const componentsResizable: ComponentsProps = {
        header: {
            ...components.header,
            th: ResizableTitle,
        },
    };

    return (
        <Table
            stripe
            loading={loading}
            columns={columnsResized as ColumnProps<MockUser>[]}
            components={componentsResizable}
            data={data}
            pagination={pagination}
            onChange={handleChangeTable}
            hover
            scroll={{
                x: tableWidth,
                y: tableScrollY,
            }}
            border
            borderCell
            className="table-demo-resizable-column [&_.arco-pagination]:w-full [&_.arco-pagination]:flex-wrap [&_.arco-pagination]:justify-start [&_.arco-pagination-list]:ml-auto [&_.arco-pagination-total-text]:h-auto [&_.arco-pagination-option]:hidden [&_.arco-pagination-option]:md:inline-block"
        />
    );
}

export default memo(TableCpn);
