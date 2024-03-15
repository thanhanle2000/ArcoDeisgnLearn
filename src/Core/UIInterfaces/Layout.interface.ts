// multiple level
export interface LeftMenuInterface {
    key: string;
    label: string;
    icon?: React.ReactNode;
    path?: string;
    handleClickFunction?: () => void;
    subList?: LeftMenuInterface[]; // subList chứa các phần tử cùng kiểu DropListDataInterface
}
