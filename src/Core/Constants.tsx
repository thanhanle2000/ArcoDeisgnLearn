import { ReactElement } from "react";
import {
    IconApps,
    IconCheckCircle,
    IconDashboard,
    IconExclamationCircle,
    IconFile,
    IconList,
    IconSettings,
    IconUser,
} from "@arco-design/web-react/icon";

import Analysis from "src/Presentation/Analysis";
import Dashboard from "src/Presentation/Dashboard";
import ListSearchTable from "src/Presentation/ListSearchTable";
import { LeftMenuInterface, translate } from "src/Core";
import LoginForm from "src/Presentation/Login/Components/LoginForm";
import RegisterForm from "src/Presentation/Login/Components/RegisterForm";

export interface Routes {
    path: string;
    element: ReactElement<any, any>;
}

// PRIVATE ROUTE
export const PRIVATE_ROUTE: Routes[] = [
    { path: "/dashboard/workplace", element: <Dashboard /> },
    { path: "/data-visualization/analysis", element: <Analysis /> },
    { path: "/list/search-table", element: <ListSearchTable /> },
    { path: "/list/card-list", element: <Analysis /> },
    { path: "/form/step-form", element: <Analysis /> },
    { path: "/profile/basic-profile", element: <Analysis /> },
    { path: "/result/success", element: <Analysis /> },
    { path: "/result/error", element: <Analysis /> },
    { path: "/exception/403", element: <Analysis /> },
    { path: "/exception/404", element: <Analysis /> },
    { path: "/exception/500", element: <Analysis /> },
    { path: "/user-center/user-info", element: <Analysis /> },
    { path: "/user-center/user-setting", element: <Analysis /> },
];

// PUBLIC ROUTE
export const PUBLIC_ROUTE: Routes[] = [
    { path: "/", element: <LoginForm /> },
    {
        path: "/login",
        element: <LoginForm />,
    },
    {
        path: "/register",
        element: <RegisterForm />,
    },
];

export const GetLeftMenuDatas = (locale: string) => {
    const data: LeftMenuInterface[] = [
        {
            key: "Dashboard",
            icon: <IconDashboard />,
            label: translate("dashboard", locale),
            subList: [
                {
                    key: "Workplace",
                    label: translate("workplace", locale),
                    path: "/dashboard/workplace",
                },
            ],
        },
        {
            key: "Data-Visualization",
            icon: <IconApps />,
            label: translate("dataVisualization", locale),
            subList: [
                {
                    key: "Analysis",
                    label: translate("Analysis", locale),
                    path: "/data-visualization/analysis",
                },
            ],
        },
        {
            key: "List",
            icon: <IconList />,
            label: translate("list", locale),
            subList: [
                {
                    key: "Search-Table",
                    label: translate("searchTable", locale),
                    path: "/list/search-table",
                },
                {
                    key: "Card-List",
                    label: translate("cardList", locale),
                    path: "/list/card-list",
                },
            ],
        },
        {
            key: "Form",
            label: translate("form", locale),
            icon: <IconSettings />,
            subList: [
                {
                    key: "Step-Form",
                    label: translate("stepForm", locale),
                    path: "/form/step-form",
                },
            ],
        },
        {
            key: "Profile",
            label: translate("profile", locale),
            icon: <IconFile />,
            subList: [
                {
                    key: "Basic-Profile",
                    label: translate("basicProfile", locale),
                    path: "/profile/basic-profile",
                },
            ],
        },
        {
            key: "Result",
            label: translate("result", locale),
            icon: <IconCheckCircle />,
            subList: [
                {
                    key: "Success",
                    label: translate("success", locale),
                    path: "/result/success",
                },
                {
                    key: "Error",
                    label: translate("error", locale),
                    path: "/result/error",
                },
            ],
        },
        {
            key: "Exception",
            label: translate("exception", locale),
            icon: <IconExclamationCircle />,
            subList: [
                {
                    key: "403",
                    label: translate("403", locale),
                    path: "/exception/403",
                },
                {
                    key: "404",
                    label: translate("404", locale),
                    path: "/exception/404",
                },
                {
                    key: "500",
                    label: translate("500", locale),
                    path: "/exception/500",
                },
            ],
        },
        {
            key: "User-Center",
            label: translate("userCenter", locale),
            icon: <IconUser />,
            subList: [
                {
                    key: "User-Info",
                    label: translate("userInfo", locale),
                    path: "/user-center/user-info",
                },
                {
                    key: "User-Setting",
                    label: translate("userSetting", locale),
                    path: "/user-center/user-setting",
                },
            ],
        },
    ];
    return data;
};
