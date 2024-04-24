import { IconDashboard, IconList, IconUser } from "@arco-design/web-react/icon";

import Dashboard from "src/Presentation/Dashboard";
import ListSearchTable from "src/Presentation/ListSearchTable";
import { LeftMenuInterface, translate } from "src/Core";
import LoginForm from "src/Presentation/Login/Components/LoginForm";
import RegisterForm from "src/Presentation/Login/Components/RegisterForm";
import ListUserManage from "src/Presentation/ListUserManage";
import UserSetting from "src/Presentation/UserSetting";

// ROUTES
export const ROUTES = {
    DASHBOARD: "/dashboard",
    LIST: {
        USER_MANAGE: "/list/user-manage",
        SEARCH_TABLE: "/list/search-table",
        CARD_LIST: "/list/card-list",
    },
    USER_CENTER: "/user-center",
    ROOT: "/",
    LOGIN: "/login",
    REGISTER: "/register",
};

// PRIVATE ROUTE
export const PRIVATE_ROUTE = [
    { path: ROUTES.DASHBOARD, element: <Dashboard /> },
    { path: ROUTES.LIST.USER_MANAGE, element: <ListUserManage /> },
    { path: ROUTES.LIST.SEARCH_TABLE, element: <ListSearchTable /> },
    { path: ROUTES.USER_CENTER, element: <UserSetting /> },
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
            icon: <IconDashboard className="text-xl" />,
            label: translate("dashboard", locale),
            path: ROUTES.DASHBOARD,
            // subList: [
            //     {
            //         key: "Workplace",
            //         label: translate("workplace", locale),
            //         path: ROUTES.DASHBOARD.WORKPLACE,
            //     },
            // ],
        },
        // {
        //     key: "Data-Visualization",
        //     icon: <IconApps className="text-xl" />,
        //     label: translate("dataVisualization", locale),
        //     subList: [
        //         {
        //             key: "Analysis",
        //             label: translate("Analysis", locale),
        //             path: ROUTES.DATA_VISUALIZATION.ANALYSIS,
        //         },
        //     ],
        // },
        {
            key: "List",
            icon: <IconList className="text-xl" />,
            label: translate("list.list", locale),
            subList: [
                {
                    key: "User-Manage",
                    label: translate("list.userManage", locale),
                    path: ROUTES.LIST.USER_MANAGE,
                },
                {
                    key: "Search-Table",
                    label: translate("list.searchTable", locale),
                    path: ROUTES.LIST.SEARCH_TABLE,
                },
                // {
                //     key: "Card-List",
                //     label: translate("cardList", locale),
                //     path: ROUTES.LIST.CARD_LIST,
                // },
            ],
        },
        // {
        //     key: "Form",
        //     label: translate("form", locale),
        //     icon: <IconSettings className="text-xl" />,
        //     subList: [
        //         {
        //             key: "Step-Form",
        //             label: translate("stepForm", locale),
        //             path: ROUTES.FORM.STEP_FORM,
        //         },
        //     ],
        // },
        // {
        //     key: "Profile",
        //     label: translate("profile", locale),
        //     icon: <IconFile className="text-xl" />,
        //     subList: [
        //         {
        //             key: "Basic-Profile",
        //             label: translate("basicProfile", locale),
        //             path: ROUTES.PROFILE.BASIC_PROFILE,
        //         },
        //     ],
        // },
        // {
        //     key: "Result",
        //     label: translate("result", locale),
        //     icon: <IconCheckCircle className="text-xl" />,
        //     subList: [
        //         {
        //             key: "Success",
        //             label: translate("success", locale),
        //             path: ROUTES.RESULT.SUCCESS,
        //         },
        //         {
        //             key: "Error",
        //             label: translate("error", locale),
        //             path: ROUTES.RESULT.ERROR,
        //         },
        //     ],
        // },
        // {
        //     key: "Exception",
        //     label: translate("exception", locale),
        //     icon: <IconExclamationCircle className="text-xl" />,
        //     subList: [
        //         {
        //             key: "403",
        //             label: translate("403", locale),
        //             path: ROUTES.EXCEPTION.EXCEPTION_403,
        //         },
        //         {
        //             key: "404",
        //             label: translate("404", locale),
        //             path: ROUTES.EXCEPTION.EXCEPTION_404,
        //         },
        //         {
        //             key: "500",
        //             label: translate("500", locale),
        //             path: ROUTES.EXCEPTION.EXCEPTION_500,
        //         },
        //     ],
        // },
        {
            key: "User-Center",
            label: translate("userCenter", locale),
            icon: <IconUser className="text-xl" />,
            path: ROUTES.USER_CENTER,
            // subList: [
            //     {
            //         key: "User-Info",
            //         label: translate("userInfo", locale),
            //         path: ROUTES.USER_CENTER.USER_INFO,
            //     },
            //     {
            //         key: "User-Setting",
            //         label: translate("userSetting", locale),
            //         path: ROUTES.USER_CENTER.USER_SETTING,
            //     },
            // ],
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

// ASSET FILE PATHs
export const ASSETFILEPATHS = {
    USERLISTMOCKDATA: "/userList.json",
};

// COLORS
export const COLORS = {
    GREEN: "green",
    RED: "red",
};

// ELEMENT_ID
export const ELEMENT_ID = {
    HEADER: "headerElementId",
    BREADCRUMB: "breadcrumbElementId",
    TABLEFILTER: "tableFilterElementId",
    TABLE: "userManageTableContainer",
};
// tanstack query keys
export const TANSTACKQUERYKEYS = {
    MOCKUSERS: "mockUsers",
};

export const MOCKUSERSTATUS = {
    ACTIVE: "Active",
    LOCKED: "Locked",
};
