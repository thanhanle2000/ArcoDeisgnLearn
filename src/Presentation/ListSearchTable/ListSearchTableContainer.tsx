import { memo, useMemo, useState } from "react";

import { Divider, PaginationProps, Typography } from "@arco-design/web-react";

import FilterCpn from "./Components/FilterCpn";
import TableCpn from "./Components/TableCpn";
import { ListSearchTableItem } from "src/Core";
import WhiteContainer from "src/Core/Components/WhiteContainer";

function ListSearchTableContainer() {
    // TABLE DATA STATE
    const [data, setData] = useState<ListSearchTableItem[]>([
        {
            collectionId: "1",
            collectionName: "Collection Name 1",
            contentGenre: "Video",
            filterMethod: "filterMethod 1",
            contentQuantity: 1723,
            creationTime: "2024-01-22 15:38:36",
            status: "ok",
        },
        {
            collectionId: "2",
            collectionName: "Collection Name 2",
            contentGenre: "Image",
            filterMethod: "filterMethod 2",
            contentQuantity: 1842,
            creationTime: "2024-02-23 21:38:36",
            status: "not ok",
        },
        {
            collectionId: "3",
            collectionName: "Collection Name 3",
            contentGenre: "Video",
            filterMethod: "filterMethod 3",
            contentQuantity: 1394,
            creationTime: "2024-03-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "4",
            collectionName: "Collection Name 4",
            contentGenre: "Image",
            filterMethod: "filterMethod 2",
            contentQuantity: 1494,
            creationTime: "2024-04-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "5",
            collectionName: "Collection Name 5",
            contentGenre: "Video",
            filterMethod: "filterMethod 1",
            contentQuantity: 1594,
            creationTime: "2024-05-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "6",
            collectionName: "Collection Name 6",
            contentGenre: "Image",
            filterMethod: "filterMethod 2",
            contentQuantity: 1694,
            creationTime: "2024-06-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "7",
            collectionName: "Collection Name 7",
            contentGenre: "Video",
            filterMethod: "filterMethod 1",
            contentQuantity: 1794,
            creationTime: "2024-07-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "8",
            collectionName: "Collection Name 8",
            contentGenre: "Image",
            filterMethod: "filterMethod 2",
            contentQuantity: 1894,
            creationTime: "2024-08-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "9",
            collectionName: "Collection Name 9",
            contentGenre: "Video",
            filterMethod: "filterMethod 1",
            contentQuantity: 1994,
            creationTime: "2024-09-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "10",
            collectionName: "Collection Name 10",
            contentGenre: "Image",
            filterMethod: "filterMethod 1",
            contentQuantity: 10494,
            creationTime: "2024-10-31 21:38:36",
            status: "ok",
        },
        {
            collectionId: "11",
            collectionName: "Collection Name 11",
            contentGenre: "Video",
            filterMethod: "filterMethod 2",
            contentQuantity: 11494,
            creationTime: "2024-11-31 21:38:36",
            status: "ok",
        },
    ]);

    // PAGINATION CONFIG
    const [pagination, setPagination] = useState<PaginationProps>({
        sizeCanChange: true,
        showTotal: true,
        total: data.length,
        pageSize: 10,
        current: 1,
        pageSizeChangeResetCurrent: true,
    });

    // ISLOADING
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const persistedData = useMemo(() => data, []);

    // HANDLE CHANGE PAGE
    const handleChangeTable = (pagination: PaginationProps) => {
        const { current, pageSize } = pagination || {};
        setLoading(true);
        setTimeout(() => {
            if (current !== undefined && pageSize !== undefined) {
                setData(
                    persistedData.slice(
                        (current - 1) * pageSize,
                        current * pageSize
                    )
                );
                setPagination((pagination) => ({
                    ...pagination,
                    current,
                    pageSize,
                }));
            }
            setLoading(false);
        }, 1000);
    };

    // HANDLE SET FILTERED DATAS
    const handleSetFilteredDatas = (newData: ListSearchTableItem[]) => {
        setData(newData);
    };

    return (
        <WhiteContainer>
            <div className="flex flex-col justify-start items-start">
                <Typography className="mb-2">Search Table</Typography>
                <FilterCpn
                    persistedData={persistedData}
                    handleSetFilteredDatas={handleSetFilteredDatas}
                />
                <Divider />
                <div className="w-full">
                    <TableCpn
                        data={data}
                        pagination={pagination}
                        loading={loading}
                        handleChangeTable={handleChangeTable}
                    />
                </div>
            </div>
        </WhiteContainer>
    );
}

export default memo(ListSearchTableContainer);
