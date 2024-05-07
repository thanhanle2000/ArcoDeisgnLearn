import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
    GetLeftMenuDatas,
    GetMenuItemByKey,
    LeftMenuInterface,
} from "src/Core";
import DropList from "src/Core/Components/DropList";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";

function SiderChildComponent() {
    // PATH
    const path = useLocation().pathname;
    const pathArray = useMemo(() => path.split("/"), [path]);

    // LOCALE
    const locale = useAppSelector((state) => state?.common?.locale);

    // DROP DATAS
    const dropDatas: LeftMenuInterface[] = GetLeftMenuDatas(locale);

    // DEFAULT ITEM
    const DefaultItem: LeftMenuInterface | undefined = useMemo(
        () => GetMenuItemByKey(pathArray[pathArray.length - 1], dropDatas),
        [dropDatas, pathArray]
    );

    return (
        <DropList
            data={dropDatas}
            mode="vertical"
            defaultSelectedKey={DefaultItem?.key}
        />
    );
}

export default SiderChildComponent;
