import { Button } from "@arco-design/web-react";
import { IconLanguage } from "@arco-design/web-react/icon";

import DropDown from "src/Core/Components/Dropdown";
import DropList from "src/Core/Components/DropList";

import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { ChangeLocale } from "src/Data/DataSource/Api/LocalDB/Slices/CommonSlice";

import { LeftMenuInterface } from "src/Core";

function LocaleButton() {
    // REDUX
    const dispatch = useAppDispatch();

    // LOCALE
    const locale = useAppSelector((state) => state?.common?.locale);

    // DROP DATAS
    const dropDatas: LeftMenuInterface[] = [
        {
            key: "en-US",
            label: "English",
            handleClickFunction: () => dispatch(ChangeLocale("en-US")),
        },
        {
            key: "vi-VN",
            label: "Vietnamese",
            handleClickFunction: () => dispatch(ChangeLocale("vi-VN")),
        },
    ];

    return (
        <DropDown
            dropList={
                <DropList
                    data={dropDatas}
                    mode="pop"
                    defaultSelectedKey={locale}
                />
            }
        >
            <Button shape="round" type="default" icon={<IconLanguage />} />
        </DropDown>
    );
}

export default LocaleButton;
