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

        console.log(tablePaginationHeight, "tablePaginationHeight");

        // SUM AND RETURN CALC HEIGHT TABLE
        const heightTable =
            window?.innerHeight -
            (breadcrumbsHeight +
                headerHeight +
                tableHeaderHeight +
                tablePaginationHeight +
                contentContainerPaddingY +
                layoutPaddingBottom +
                fixxTable);

        return heightTable;
    };

    // STATE
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [_, setScreenHeight] = useState<number>(window?.innerHeight);

    // // GET HANDLE RESIZE
    // const handleResize = useDebounce(
    //     () =>
    //         setScreenHeight(
    //             isSafari
    //                 ? window?.visualViewport?.height!
    //                 : window?.innerHeight!
    //         ),
    //     100
    // );

    // // USE EFFECT
    // useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    //     window.addEventListener("orientationchange", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //         window.removeEventListener("orientationchange", handleResize);
    //     };
    // }, [handleResize]);

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
