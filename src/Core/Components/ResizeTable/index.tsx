import { useAntdColumnResize } from "react-antd-column-resize";
import { ELEMENT_ID } from "src/Core";
import { useHeightElement } from "src/Core/Hooks/useHeightElement";
import tailwindConfig from "../../../../tailwind.config";

// CHECK WEB IN SAFARI
// const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

interface Props {
    tableId: string;
    columns: any;
    fixxTable?: number;
}

// RESIZE TABLE
function ResizeTable({ tableId, columns, fixxTable = 0 }: Props) {
    // CALC TABLE HEIGHT
    const calculateTableScrollY = () => {
        // GÁN VALUE
        const breadcrumbsHeight = useHeightElement([
            `#${ELEMENT_ID?.BREADCRUMB}`,
        ]);
        const headerHeight = useHeightElement([`#${ELEMENT_ID?.HEADER}`]);
        const footerHeight = useHeightElement([`#${ELEMENT_ID?.FOOTER}`]);
        const tableHeaderHeight = useHeightElement([
            `#${tableId} .arco-table-header`,
            `#${tableId} thead`,
        ]);
        const tablePaginationHeight = useHeightElement([
            `#${tableId} .arco-table-pagination`,
        ]);

        const layoutPaddingBottom =
            tailwindConfig?.theme?.extend?.spacing?.STANDARDMARGINANDPADDING;
        const contentContainerPaddingY =
            2 *
            parseInt(
                tailwindConfig?.theme?.extend?.spacing
                    ?.STANDARDCONTAINERPADDINGY,
                10
            );

        // SUM AND RETURN CALC HEIGHT TABLE
        const heightTable =
            window?.innerHeight -
            (breadcrumbsHeight +
                headerHeight +
                footerHeight +
                tableHeaderHeight +
                tablePaginationHeight +
                contentContainerPaddingY +
                layoutPaddingBottom +
                fixxTable);

        return heightTable;
    };

    // USE ANTD COLUMN RESIZE
    const { resizableColumns, components, tableWidth } =
        useAntdColumnResize(() => {
            return { columns: columns };
        }, [columns]);

    return {
        resizableColumns,
        components,
        tableWidth,
        tableScrollY: calculateTableScrollY(),
    };
}

export default ResizeTable;
