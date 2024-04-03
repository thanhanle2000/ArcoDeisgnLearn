import {
    Button,
    DatePicker,
    Input,
    Select,
    Typography,
} from "@arco-design/web-react";
import { CalendarValue } from "@arco-design/web-react/es/Calendar/interface";
import { IconRefresh, IconSearch } from "@arco-design/web-react/icon";
import { memo, useCallback, useMemo, useState } from "react";
import {
    ListSearchTableItem,
    filterByCollectionId,
    filterByCollectionName,
    filterByContentGenre,
    filterByCreationTime,
    filterByFilterMethod,
    filterByStatus,
} from "src/Core";
const Option = Select.Option;

interface Props {
    handleSetFilteredDatas: (newData: ListSearchTableItem[]) => void;
    persistedData: ListSearchTableItem[];
}

function FilterCpn({ persistedData, handleSetFilteredDatas }: Props) {
    // STATE
    const [collectionId, setCollectionId] = useState("");
    const [contentGenre, setContentGenre] = useState([]);
    const [creationTime, setCreationTime] = useState<CalendarValue[]>([]);
    const [collectionName, setCollectionName] = useState("");
    const [filterMethod, setFilterMethod] = useState([]);
    const [status, setStatus] = useState([]);

    //HANDLE SEARCH
    const handleSearch = useCallback(() => {
        const filteredByCollectionId = filterByCollectionId(
            persistedData,
            collectionId
        );
        const filteredByCollectionName = filterByCollectionName(
            filteredByCollectionId,
            collectionName
        );
        const filteredByContentGenre = filterByContentGenre(
            filteredByCollectionName,
            contentGenre
        );
        const filteredByFilterMethod = filterByFilterMethod(
            filteredByContentGenre,
            filterMethod
        );
        const filteredByStatus = filterByStatus(filteredByFilterMethod, status);
        const filteredByCreationTime = filterByCreationTime(
            filteredByStatus,
            creationTime[0] ? creationTime[0].toString() : "",
            creationTime[1] ? creationTime[1].toString() : ""
        );

        handleSetFilteredDatas(filteredByCreationTime);
    }, [
        collectionId,
        collectionName,
        contentGenre,
        creationTime,
        filterMethod,
        handleSetFilteredDatas,
        persistedData,
        status,
    ]);

    // CONTENT GENRE, FILTER METHOD, STATUS
    const contentGenresFilterOption = useMemo(() => ["Video", "Image"], []);
    const filterMethodFilterOption = useMemo(
        () => ["filterMethod 1", "filterMethod 2"],
        []
    );
    const statusFilterOption = useMemo(() => ["ok", "not ok"], []);

    // HANDLE RESET
    const handleReset = () => {
        setCollectionId("");
        setCollectionName("");
        setContentGenre([]);
        setCreationTime(["", ""]);
        setFilterMethod([]);
        setStatus([]);
        handleSetFilteredDatas(persistedData);
    };

    return (
        <div className="w-full flex flex-col xl:flex-row flex-wrap">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-2 flex-1 pe-5">
                <div className="flex flex-col gap-4">
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Collection ID
                        </Typography>
                        <Input
                            value={collectionId}
                            onChange={setCollectionId}
                            className={`col-span-9`}
                            allowClear
                            placeholder="Please Enter something"
                        />
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Content genre
                        </Typography>
                        <Select
                            onChange={setContentGenre}
                            value={contentGenre}
                            className={`col-span-9`}
                            mode="multiple"
                            allowCreate
                            placeholder="all"
                            allowClear
                        >
                            {contentGenresFilterOption?.map((item) => (
                                <Option key={item} value={item}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Creation time
                        </Typography>
                        <DatePicker.RangePicker
                            onChange={setCreationTime}
                            className={`col-span-9`}
                            value={creationTime}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Collection Name
                        </Typography>
                        <Input
                            onChange={setCollectionName}
                            value={collectionName}
                            className={`col-span-9`}
                            allowClear
                            placeholder="Please Enter something"
                        />
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Filter method
                        </Typography>
                        <Select
                            onChange={setFilterMethod}
                            value={filterMethod}
                            className={`col-span-9`}
                            mode="multiple"
                            allowCreate
                            placeholder="all"
                            allowClear
                        >
                            {filterMethodFilterOption?.map((item) => (
                                <Option key={item} value={item}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Status
                        </Typography>
                        <Select
                            onChange={setStatus}
                            value={status}
                            className={`col-span-9`}
                            mode="multiple"
                            allowCreate
                            placeholder="all"
                            allowClear
                        >
                            {statusFilterOption?.map((item) => (
                                <Option key={item} value={item}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end ps-5 xl:border-l gap-4 xl:gap-0 mt-4 xl:mt-0">
                <Button
                    type="primary"
                    title="Search"
                    icon={<IconSearch />}
                    size="default"
                    className={`w-full`}
                    onClick={handleSearch}
                >
                    Search
                </Button>
                <Button
                    onClick={handleReset}
                    type="secondary"
                    title="Reset"
                    icon={<IconRefresh />}
                    size="default"
                    className={`w-full`}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}

export default memo(FilterCpn);
