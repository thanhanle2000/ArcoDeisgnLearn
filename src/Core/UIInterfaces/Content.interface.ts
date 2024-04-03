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

// export interface ListMockUserTableItem {
//     id: number;
//     user_name: string;
//     email: string;
//     status: {
//         text: string;
//         label: string;
//     };
//     group_list: UserGroup[];
// }

export type MockUserTableItem = Pick<
    MockUser,
    "id" | "user_name" | "email" | "status_label" | "group_list"
>;

export interface MockUserFilterProp {
    id: number | undefined;
    user_name: string;
    email: string;
    status: string;
    group_ids: number[];
}
