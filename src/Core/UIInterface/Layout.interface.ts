export interface DropListDataItemInterface {
    key: string;
    title: React.ReactNode;
    handleClickFunction?: (...args: any[]) => void;
}

export interface DropListDataInterface {
    key: string;
    title: React.ReactNode;
    handleClickFunction?: (...args: any[]) => void;
    subList?: DropListDataItemInterface[];
}
