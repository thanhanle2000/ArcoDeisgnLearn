import { PaginationProps, Table } from "@arco-design/web-react";
import { ColumnProps } from "@arco-design/web-react/es/Table";
import { RowCallbackProps } from "@arco-design/web-react/es/Table/interface";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { MockUser } from "src/Domain/Model/MockUser";
import tailwindConfig from "../../../../tailwind.config";
import GroupListCpn from "./GroupListCpn";
import IdCpn from "./IdCpn";
import StatusCpn from "./StatusCpn";
import { useAntdColumnResize } from "react-antd-column-resize";
import { ELEMENT_ID, ElementHeightInterface } from "src/Core";

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
  const [elementHeights, setElementHeights] = useState<ElementHeightInterface>({
    breadcrumbHeight: 0,
    headerHeight: 0,
    tableFilterHeight: 0,
    tablePaginationHeight: 0,
    theadHeight: 0,
  });

  // COLUMNS
  const columns: ColumnProps<MockUser>[] = useMemo(
    () =>
      [
        {
          key: "id",
          title: "ID",
          dataIndex: "id",
          render: (_col: any, record: MockUser) => <IdCpn mockUser={record} />,
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
          // fixed: "right",
        },
      ] as ColumnProps<MockUser>[],
    []
  );

  // CALCULATE TABLE SCROLL Y
  const tableScrollY = useMemo(() => {
    return (
      window.innerHeight -
      elementHeights.headerHeight -
      elementHeights.breadcrumbHeight -
      2 *
        parseInt(
          tailwindConfig.theme.extend.spacing.STANDARDCONTAINERPADDINGY,
          10
        ) -
      elementHeights.tableFilterHeight -
      parseInt(tailwindConfig.theme.extend.spacing.TABLEMARGINTOP, 10) -
      elementHeights.theadHeight -
      elementHeights.tablePaginationHeight -
      1
    );
  }, [
    elementHeights.breadcrumbHeight,
    elementHeights.headerHeight,
    elementHeights.tableFilterHeight,
    elementHeights.tablePaginationHeight,
    elementHeights.theadHeight,
  ]);

  // GET HEIGHTs
  const getHeights = useCallback(() => {
    // GET ELEMENTs
    const thead =
      document.querySelector(`#${ELEMENT_ID.TABLE} .arco-table-header`) ||
      document.querySelector(`#${ELEMENT_ID.TABLE} thead`);

    const tablePagination = document.querySelector(
      `#${ELEMENT_ID.TABLE} .arco-table-pagination`
    );

    const layoutHeader = document.getElementById(ELEMENT_ID.HEADER);
    const breadcrumb = document.getElementById(ELEMENT_ID.BREADCRUMB);
    const tableFilter = document.getElementById(ELEMENT_ID.TABLEFILTER);

    // GET ELEMENT HEIGHTs
    if (
      thead instanceof HTMLElement &&
      tablePagination instanceof HTMLElement &&
      layoutHeader instanceof HTMLElement &&
      breadcrumb instanceof HTMLElement &&
      tableFilter instanceof HTMLElement
    ) {
      const tHeadMargin = {
        top: parseInt(getComputedStyle(thead).marginTop, 10) || 0,
        bottom: parseInt(getComputedStyle(thead).marginBottom, 10) || 0,
      };
      const tablePaginationMargin = {
        top: parseInt(getComputedStyle(tablePagination).marginTop, 10) || 0,
        bottom:
          parseInt(getComputedStyle(tablePagination).marginBottom, 10) || 0,
      };

      const breadcrumbMargin = {
        top: parseInt(getComputedStyle(breadcrumb).marginTop, 10) || 0,
        bottom: parseInt(getComputedStyle(breadcrumb).marginBottom, 10) || 0,
      };

      const tableFilterMargin = {
        top: parseInt(getComputedStyle(tableFilter).marginTop, 10) || 0,
        bottom: parseInt(getComputedStyle(tableFilter).marginBottom, 10) || 0,
      };

      const layoutHeaderMargin = {
        top: parseInt(getComputedStyle(layoutHeader).marginTop, 10) || 0,
        bottom: parseInt(getComputedStyle(layoutHeader).marginBottom, 10) || 0,
      };

      setElementHeights({
        theadHeight: thead.offsetHeight + tHeadMargin.top + tHeadMargin.bottom,
        breadcrumbHeight:
          breadcrumb.offsetHeight +
          breadcrumbMargin.top +
          breadcrumbMargin.bottom,
        headerHeight:
          layoutHeader.offsetHeight +
          layoutHeaderMargin.top +
          layoutHeaderMargin.bottom,
        tableFilterHeight:
          tableFilter.offsetHeight +
          tableFilterMargin.top +
          tableFilterMargin.bottom,
        tablePaginationHeight:
          tablePagination.offsetHeight +
          tablePaginationMargin.top +
          tablePaginationMargin.bottom,
      });
    }
  }, []);

  // USE ANTD COLUMN RESIZE
  const { resizableColumns, components, tableWidth } =
    useAntdColumnResize(() => {
      return { columns, minWidth: 100 };
    }, []);

  // USEEFFECT
  useEffect(() => {
    if (!loading) {
      getHeights();
      window.addEventListener("resize", () => {
        getHeights();
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  console.log(elementHeights);
  return (
    <div id={ELEMENT_ID.TABLE}>
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
        scroll={{ x: tableWidth, y: tableScrollY }}
        border
        className={`[&_.arco-table-tr]:cursor-pointer [&_.arco-pagination]:w-full [&_.arco-pagination]:flex-wrap [&_.arco-pagination]:justify-start [&_.arco-pagination-list]:ml-auto [&_.arco-pagination-total-text]:h-auto [&_.arco-pagination-option]:hidden [&_.arco-pagination-option]:md:inline-block`}
      />
    </div>
  );
}

export default memo(TableCpn);
