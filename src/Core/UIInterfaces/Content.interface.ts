import { MockUser } from "src/Domain/Model/MockUser";

export interface DataCategoryItemInterface {
    image?: string;
    label: string;
    data: string;
    unit: React.ReactNode;
}

export interface RightDashboardButtonInterface {
    label: string;
    icon: React.ReactNode;
}

export interface RightDashboardAnnouncementInterface {
    tag: React.ReactNode;
    label: string;
}

export interface ListSearchTableItem {
    collectionId: string;
    collectionName: string;
    contentGenre: "Video" | "Image";
    filterMethod: string;
    contentQuantity: number;
    creationTime: string;
    status: "ok" | "not ok";
}

export type MockUserTableItem = Pick<
    MockUser,
    "id" | "user_name" | "email" | "status_label" | "group_list"
>;

export interface MockUserFilterProp {
    searchValue: string;
}

export interface MockUserDrawerDataInterface {
    label?: React.ReactNode;
    value?: React.ReactNode;
}

export interface ElementHeightInterface {
    headerHeight: number;
    breadcrumbHeight: number;
    tableFilterHeight: number;
    theadHeight: number;
    tablePaginationHeight: number;
}

// MESSAGE STATUS TYPE
export type MessageStatusType =
    | "normal"
    | "info"
    | "success"
    | "warning"
    | "error";
