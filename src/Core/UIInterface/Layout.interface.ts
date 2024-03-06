// 1 item
export interface DropListDataItemInterface {
    key: string;
    title: React.ReactNode;
    handleClickFunction?: (...args: any[]) => void;
}

// 1 item with multiple level
export interface DropListDataInterface {
    key: string;
    title: React.ReactNode;
    handleClickFunction?: (...args: any[]) => void;
    subList?: DropListDataInterface[]; // subList chứa các phần tử cùng kiểu DropListDataInterface
}
