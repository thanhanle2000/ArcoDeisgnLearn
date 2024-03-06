import { Button } from "@arco-design/web-react";
import { IconLanguage } from "@arco-design/web-react/icon";

import DropDownComponent from "src/Presentation/components/Dropdown";
import DropList from "src/Presentation/components/DropList";

import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { ChangeLocale } from "src/Data/DataSource/Api/LocalDB/Slices/CommonSlice";

import { DropListDataInterface } from "src/Core";

function LocaleButton() {
    const dispatch = useAppDispatch();
    const locale = useAppSelector((state) => state.common.locale);

    const dropListData: DropListDataInterface[] = [
        {
            title: "English",
            handleClickFunction: () => {
                dispatch(ChangeLocale("en-US"));
            },
            key: "en-US",
        },
        {
            title: "Vietnamese",
            handleClickFunction: () => {
                dispatch(ChangeLocale("vi-VN"));
            },
            key: "vi-VN",
        },
    ];

    const dropList = (
        <DropList data={dropListData} mode="pop" defaultSelectedKey={locale} />
    );

    return (
        <DropDownComponent dropList={dropList}>
            <Button shape="round" type="default" icon={<IconLanguage />} />
        </DropDownComponent>
    );
}

export default LocaleButton;
