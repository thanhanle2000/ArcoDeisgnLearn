import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
    GetLeftMenuDatas,
    LeftMenuInterface,
    GetBreadCrumbArray,
} from "src/Core";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";

import { Breadcrumb } from "@arco-design/web-react";
import { IconCheck } from "@arco-design/web-react/icon";
const BreadcrumbItem = Breadcrumb.Item;

function BreadcrumbCpn() {
    // PATH
    const path = useLocation().pathname;

    // LOCALE
    const locale = useAppSelector((state) => state?.common?.locale);

    // DROP DATAS
    const dropDatas: LeftMenuInterface[] = useMemo(
        () => GetLeftMenuDatas(locale),
        [locale]
    );

    // LABELs
    const MenuList = useMemo(
        () => GetBreadCrumbArray(dropDatas, path),
        [dropDatas, path]
    );

    return (
        <Breadcrumb className={`mb-4`}>
            <BreadcrumbItem>
                {MenuList[0]?.icon || <IconCheck />}
            </BreadcrumbItem>
            {MenuList
                ? MenuList.map((item) => (
                      <BreadcrumbItem key={item?.key}>
                          {item?.label}
                      </BreadcrumbItem>
                  ))
                : "Error"}
        </Breadcrumb>
    );
}

export default BreadcrumbCpn;
