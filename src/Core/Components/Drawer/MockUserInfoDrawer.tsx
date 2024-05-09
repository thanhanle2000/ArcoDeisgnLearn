import { Descriptions, Divider } from "@arco-design/web-react";
import DrawerComponent from ".";
import { MockUser } from "src/Domain/Model/MockUser";
import { memo, useMemo } from "react";
import { MockUserDrawerDataInterface } from "src/Core";

interface Props {
    data: MockUser;
    visible: boolean;
    handleSetVisible: (isVsb: boolean) => void;
}

function MockUserInfoDrawer({ data, visible, handleSetVisible }: Props) {
    const personalInfo: MockUserDrawerDataInterface[] = useMemo(
        () => [
            {
                label: "Tên đăng nhập:",
                value: data?.user_name,
            },
            {
                label: "Tên đầy đủ:",
                value: data?.full_name,
            },
            {
                label: "Địa chỉ:",
                value: data?.address,
            },
        ],
        [data?.address, data?.full_name, data?.user_name]
    );

    const contactInfo: MockUserDrawerDataInterface[] = useMemo(
        () => [
            {
                label: "Email:",
                value: data?.email,
            },
            {
                label: "Số điện thoại:",
                value: data?.phone,
            },
        ],
        [data?.email, data?.phone]
    );

    const accountInfo: MockUserDrawerDataInterface[] = useMemo(
        () => [
            {
                label: "Phân quyền:",
                value: (
                    <div className="flex flex-row">
                        {data?.group_list?.map((group, index) => (
                            <div
                                key={group?.id}
                                className={`${index > 0 && "mx-2"}`}
                            >
                                {group?.name}
                                {index < data?.group_list?.length - 1 && (
                                    <span className="mx-2">|</span>
                                )}
                            </div>
                        ))}
                    </div>
                ),
            },
            {
                label: "Trạng thái:",
                value: data?.status_label?.text,
            },
        ],
        [data?.group_list, data?.status_label?.text]
    );

    const otherInfo: MockUserDrawerDataInterface[] = useMemo(
        () => [
            {
                label: "Ngày tạo:",
                value: data?.created_at,
            },
            {
                label: "Ngày cập nhật:",
                value: data?.updated_at,
            },
            {
                label: "Cập nhật bởi:",
                value: data?.updated_by,
            },
        ],
        [data?.created_at, data?.updated_at, data?.updated_by]
    );

    const contentDescriptions = useMemo(
        () => [
            {
                title: "Thông tin cá nhân",
                data: personalInfo,
            },
            {
                title: "Thông tin liên hệ",
                data: contactInfo,
            },
            {
                title: "Thông tin tài khoản",
                data: accountInfo,
            },
            {
                title: "Thông tin khác",
                data: otherInfo,
            },
        ],
        [accountInfo, contactInfo, otherInfo, personalInfo]
    );

    return (
        <DrawerComponent
            width={window.innerWidth > 500 ? 500 : window.innerWidth - 60}
            title={`Thông tin của ${data?.user_name}`}
            visible={visible}
            handleSetVisible={handleSetVisible}
            content={
                <>
                    {contentDescriptions.map((content, index) => (
                        <>
                            <Descriptions
                                title={content?.title}
                                column={1}
                                labelStyle={{ width: 200 }}
                                data={content?.data}
                            />
                            {index < contentDescriptions?.length - 1 && (
                                <Divider />
                            )}
                        </>
                    ))}
                </>
            }
        />
    );
}

export default memo(MockUserInfoDrawer);
