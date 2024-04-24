export interface UserStatusLabel {
    value: string;
    text: string;
    label: string;
}

export interface UserGroup {
    id: number;
    name: string;
}

export interface MockUser {
    user_name: string;
    full_name: string;
    email: string;
    phone: string;
    address: string;
    status: "Active" | "Locked";
    status_label: UserStatusLabel;
    groups: string;
    group_list: UserGroup[];
    id: number;
    created_at: string;
    updated_at: string;
    updated_by: string;
}

export interface ListMockUser {
    data: {
        total: number;
        list: MockUser[];
    };
    success: boolean;
    code: number;
    message: string;
}
