import { Input } from "@arco-design/web-react";
const InputSearch = Input.Search;

import Logo from "src/Presentation/components/Logo";

import LocaleButton from "src/Presentation/components/LayoutComponent/Header/Components/LocaleButton";
import DarkModeButton from "src/Presentation/components/LayoutComponent/Header/Components/DarkModeButton";
import NotificationButton from "src/Presentation/components/LayoutComponent/Header/Components/NotificationButton";
import SettingButton from "src/Presentation/components/LayoutComponent/Header/Components/SettingButton";
import SkinButton from "src/Presentation/components/LayoutComponent/Header/Components/SkinButton";
import AvatarButton from "src/Presentation/components/LayoutComponent/Header/Components/AvatarButton";

import styles from "src/Presentation/components/LayoutComponent/Header/Header.module.scss";

import { HeaderRightSideItemInterface } from "src/Core";
import RightSideList from "./Components/RightSideList";

function HeaderLayoutComponent() {
    const itemList: HeaderRightSideItemInterface[] = [
        {
            key: "searchInputHeader",
            content: (
                <InputSearch
                    allowClear
                    placeholder="Please search"
                    className={`${styles.header_input_search} text-sm rounded-2xl`}
                />
            ),
        },
        {
            key: "localeButtonHeader",
            content: <LocaleButton />,
        },
        {
            key: "notificationButtonHeader",
            content: <NotificationButton />,
        },
        {
            key: "darkModeButtonHeader",
            content: <DarkModeButton />,
        },
        {
            key: "settingButtonHeader",
            content: <SettingButton />,
        },
        {
            key: "skinButtonHeader",
            content: <SkinButton />,
        },
        {
            key: "AvatarButtonHeader",
            content: <AvatarButton />,
        },
    ];
    return (
        <div
            className={`h-full flex flex-row justify-between items-center ${styles.header_container}`}
        >
            <div className="ps-[20px]">
                <Logo />
            </div>
            <div className="flex flex-row gap-2">
                <RightSideList items={itemList} />
            </div>
        </div>
    );
}

export default HeaderLayoutComponent;
