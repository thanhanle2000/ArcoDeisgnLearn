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
