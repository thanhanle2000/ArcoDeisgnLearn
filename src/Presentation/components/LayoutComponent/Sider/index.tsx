import { useNavigate } from "react-router-dom";
import {
    IconDashboard,
    IconApps,
    IconList,
    IconSettings,
    IconFile,
    IconCheckCircle,
    IconExclamationCircle,
    IconUser,
} from "@arco-design/web-react/icon";

import { DropListDataInterface } from "src/Core";
import DropList from "src/Presentation/components/DropList";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { translate } from "src/Core/i18n";

function SiderChildComponent() {
    const navigate = useNavigate();
    const locale = useAppSelector((state) => state.common.locale);

    const dropListData: DropListDataInterface[] = [
        {
            title: (
                <>
                    <IconDashboard /> {translate("dashboard", locale)}
                </>
            ),
            key: "Dashboard",
            subList: [
                {
                    title: "Workplace",
                    key: "WorkplaceSider",
                    handleClickFunction: () => {
                        navigate("/");
                    },
                },
            ],
        },
        {
            title: (
                <>
                    <IconApps /> {translate("dataVisualization", locale)}
                </>
            ),
            key: "Data Visualization",
            subList: [
                {
                    title: "Analysis",
                    key: "Analysis",
                    handleClickFunction: () => {
                        navigate("/analysis");
                    },
                },
            ],
        },
        {
            title: (
                <>
                    <IconList /> {translate("list", locale)}
                </>
            ),
            key: "List",
            subList: [
                {
                    title: "Search Table",
                    key: "Search Table",
                },
                {
                    title: "Card List",
                    key: "CardListSider",
                },
            ],
        },
        {
            title: (
                <>
                    <IconSettings /> {translate("form", locale)}
                </>
            ),
            key: "Form",
            subList: [
                {
                    title: "Step form",
                    key: "Step form",
                },
            ],
        },
        {
            title: (
                <>
                    <IconFile /> {translate("profile", locale)}
                </>
            ),
            key: "Profile",
            subList: [
                {
                    title: "Basic Profile",
                    key: "Basic Profile",
                },
            ],
        },
        {
            title: (
                <>
                    <IconCheckCircle /> {translate("result", locale)}
                </>
            ),
            key: "Result",
            subList: [
                {
                    title: "Success",
                    key: "Success",
                },
                {
                    title: "Error",
                    key: "Error",
                },
            ],
        },
        {
            title: (
                <>
                    <IconExclamationCircle /> {translate("exception", locale)}
                </>
            ),
            key: "Exception",
            subList: [
                {
                    title: "403",
                    key: "403",
                },
                {
                    title: "404",
                    key: "404",
                },
                {
                    title: "500",
                    key: "500",
                },
            ],
        },
        {
            title: (
                <>
                    <IconUser /> {translate("userCenter", locale)}
                </>
            ),
            key: "User Center",
            subList: [
                {
                    title: "User Info",
                    key: "User Info",
                },
                {
                    title: "User Setting",
                    key: "UserSettingSider",
                },
            ],
        },
    ];

    return (
        <DropList
            data={dropListData}
            mode="vertical"
            defaultSelectedKey="WorkplaceSider"
        />
    );
}

export default SiderChildComponent;
