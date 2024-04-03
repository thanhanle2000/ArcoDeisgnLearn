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
import ListUserManage from "src/Presentation/ListUserManage";

// ROUTES
export const ROUTES = {
    DASHBOARD: {
        WORKPLACE: "/dashboard/workplace",
    },
    DATA_VISUALIZATION: {
        ANALYSIS: "/data-visualization/analysis",
    },
    LIST: {
        USER_MANAGE: "/list/user-manage",
        SEARCH_TABLE: "/list/search-table",
        CARD_LIST: "/list/card-list",
    },
    FORM: {
        STEP_FORM: "/form/step-form",
    },
    PROFILE: {
        BASIC_PROFILE: "/profile/basic-profile",
    },
    RESULT: {
        SUCCESS: "/result/success",
        ERROR: "/result/error",
    },
    EXCEPTION: {
        EXCEPTION_403: "/exception/403",
        EXCEPTION_404: "/exception/404",
        EXCEPTION_500: "/exception/500",
    },
    USER_CENTER: {
        USER_INFO: "/user-center/user-info",
        USER_SETTING: "/user-center/user-setting",
    },
    ROOT: "/",
    LOGIN: "/login",
    REGISTER: "/register",
};

// PRIVATE ROUTE
export const PRIVATE_ROUTE = [
    { path: ROUTES.DASHBOARD.WORKPLACE, element: <Dashboard /> },
    { path: ROUTES.DATA_VISUALIZATION.ANALYSIS, element: <Analysis /> },
    { path: ROUTES.LIST.USER_MANAGE, element: <ListUserManage /> },
    { path: ROUTES.LIST.SEARCH_TABLE, element: <ListSearchTable /> },
    { path: ROUTES.LIST.CARD_LIST, element: <Analysis /> },
    { path: ROUTES.FORM.STEP_FORM, element: <Analysis /> },
    { path: ROUTES.PROFILE.BASIC_PROFILE, element: <Analysis /> },
    { path: ROUTES.RESULT.SUCCESS, element: <Analysis /> },
    { path: ROUTES.RESULT.ERROR, element: <Analysis /> },
    { path: ROUTES.EXCEPTION.EXCEPTION_403, element: <Analysis /> },
    { path: ROUTES.EXCEPTION.EXCEPTION_404, element: <Analysis /> },
    { path: ROUTES.EXCEPTION.EXCEPTION_500, element: <Analysis /> },
    { path: ROUTES.USER_CENTER.USER_INFO, element: <Analysis /> },
    { path: ROUTES.USER_CENTER.USER_SETTING, element: <Analysis /> },
];

// PUBLIC ROUTE
export const PUBLIC_ROUTE = [
    { path: ROUTES.ROOT, element: <LoginForm /> },
    {
        path: ROUTES.LOGIN,
        element: <LoginForm />,
    },
    {
        path: ROUTES.REGISTER,
        element: <RegisterForm />,
    },
];

// MENU DATAS
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
                    path: ROUTES.DASHBOARD.WORKPLACE,
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
                    path: ROUTES.DATA_VISUALIZATION.ANALYSIS,
                },
            ],
        },
        {
            key: "List",
            icon: <IconList />,
            label: translate("list", locale),
            subList: [
                {
                    key: "User-Manage",
                    label: translate("userManage", locale),
                    path: ROUTES.LIST.USER_MANAGE,
                },
                {
                    key: "Search-Table",
                    label: translate("searchTable", locale),
                    path: ROUTES.LIST.SEARCH_TABLE,
                },
                {
                    key: "Card-List",
                    label: translate("cardList", locale),
                    path: ROUTES.LIST.CARD_LIST,
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
                    path: ROUTES.FORM.STEP_FORM,
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
                    path: ROUTES.PROFILE.BASIC_PROFILE,
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
                    path: ROUTES.RESULT.SUCCESS,
                },
                {
                    key: "Error",
                    label: translate("error", locale),
                    path: ROUTES.RESULT.ERROR,
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
                    path: ROUTES.EXCEPTION.EXCEPTION_403,
                },
                {
                    key: "404",
                    label: translate("404", locale),
                    path: ROUTES.EXCEPTION.EXCEPTION_404,
                },
                {
                    key: "500",
                    label: translate("500", locale),
                    path: ROUTES.EXCEPTION.EXCEPTION_500,
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
                    path: ROUTES.USER_CENTER.USER_INFO,
                },
                {
                    key: "User-Setting",
                    label: translate("userSetting", locale),
                    path: ROUTES.USER_CENTER.USER_SETTING,
                },
            ],
        },
    ];
    return data;
};

// FORM RULE MESSAGES
export const FORMRULEMESSAGES = {
    LOGIN: {
        USERNAME_REQUIRED: "Username is required",
        USERNAME_MAXLENGTH: "Username must has less than 16 characters",
        PASSWORD_REQUIRED: "Password is required",
        PASSWORD_MINLENGTH: "Password must has at least 6 characters",
        PASSWORD_MAXLENGTH: "Password must has less than 16 characters",
    },
};

export const ASSETFILEPATHS = {
    USERLISTMOCKDATA: "/userList.json",
};
