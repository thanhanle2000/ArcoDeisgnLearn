import { Descriptions, Divider } from "@arco-design/web-react";
import DrawerComponent from ".";
import { MockUser } from "src/Domain/Model/MockUser";
import { memo } from "react";

interface Props {
    data: MockUser;
    visible: boolean;
    handleSetVisible: (isVsb: boolean) => void;
}

function MockUserInfoDrawer({ data, visible, handleSetVisible }: Props) {
    return (
        <DrawerComponent
            width={500}
            title={`Thông tin của ${data.user_name}`}
            visible={visible}
            handleSetVisible={handleSetVisible}
            content={
                <>
                    <Descriptions
                        colon=""
                        title="Thông tin cá nhân"
                        column={1}
                        labelStyle={{ width: 200 }}
                        data={[
                            {
                                label: "Tên đăng nhập",
                                value: data.user_name,
                            },
                            {
                                label: "Tên đầy đủ",
                                value: data.full_name,
                            },
                            {
                                label: "Địa chỉ",
                                value: data.address,
                            },
                        ]}
                    />
                    <Divider />
                    <Descriptions
                        colon=""
                        title="Thông tin liên hệ"
                        column={1}
                        labelStyle={{ width: 200 }}
                        data={[
                            {
                                label: "Email",
                                value: data.email,
                            },
                            {
                                label: "Số điện thoại",
                                value: data.email,
                            },
                        ]}
                    />
                    <Divider />
                    <Descriptions
                        colon=""
                        title="Thông tin tài khoản"
                        column={1}
                        labelStyle={{ width: 200 }}
                        data={[
                            {
                                label: "Phân quyền",
                                value: (
                                    <div className="flex flex-row">
                                        {data.group_list.map((group, index) => (
                                            <div
                                                key={group.id}
                                                className={`${
                                                    index > 0 && "mx-2"
                                                }`}
                                            >
                                                {group.name}
                                            </div>
                                        ))}
                                    </div>
                                ),
                            },
                            {
                                label: "Trạng thái",
                                value: data.status_label.text,
                            },
                        ]}
                    />
                    <Divider />
                    <Descriptions
                        colon=""
                        title="Thông tin khác"
                        column={1}
                        labelStyle={{ width: 200 }}
                        data={[
                            {
                                label: "Ngày tạo",
                                value: data.created_at,
                            },
                            {
                                label: "Ngày cập nhật",
                                value: data.updated_at,
                            },
                            {
                                label: "Cập nhật bởi",
                                value: data.updated_by,
                            },
                        ]}
                    />
                </>
            }
        />
    );
}

export default memo(MockUserInfoDrawer);
