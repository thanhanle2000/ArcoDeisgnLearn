import { Avatar, Button, Tabs, Tag, Typography } from "@arco-design/web-react";
import { IconCamera } from "@arco-design/web-react/icon";
import BasicInfo from "./Components/BasicInfo";

const TabPane = Tabs.TabPane;

function UserSetting() {
    return (
        <div className="flex flex-col justify-start items-start">
            <div className="w-full rounded px-[20px] py-[14px] !bg-[color:var(--color-bg-2)]">
                <div className="grid grid-cols-12 gap-4 p-5">
                    <div className="col-span-2 flex flex-row justify-start items-center">
                        <Avatar
                            className="w-28 h-28"
                            triggerIcon={<IconCamera />}
                            triggerType="mask"
                        >
                            <img
                                alt="avatar"
                                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                            />
                        </Avatar>
                    </div>
                    <div className="col-span-4 flex flex-row justify-center items-center gap-4">
                        <div className="flex flex-col items-end gap-2">
                            <Typography className="text-[#80969C]">
                                User Name:
                            </Typography>
                            <Typography className="text-[#80969C]">
                                Account ID:
                            </Typography>
                            <Typography className="text-[#80969C]">
                                Registration time:
                            </Typography>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Typography>王立群</Typography>
                            <Typography>qfyx-21215478</Typography>
                            <Typography>2016-01-10 17:16:45</Typography>
                        </div>
                    </div>
                    <div className="col-span-6 flex flex-row justify-center items-center gap-4">
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex flex-row items-center h-8">
                                <Typography className="text-[#80969C]">
                                    Whether Verified:
                                </Typography>
                            </div>
                            <div className="flex flex-row items-center h-8">
                                <Typography className="text-[#80969C]">
                                    Phone Number:
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex flex-row items-center">
                                <Tag color="green">verified</Tag>
                                <Button type="text">Edit</Button>
                            </div>
                            <div className="flex flex-row items-center">
                                <Typography>177******38</Typography>
                                <Button type="text">Edit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 rounded p-5 !bg-[color:var(--color-bg-2)]">
                <Tabs type="rounded" defaultActiveTab="1">
                    <TabPane key="1" title="Basic Infomation">
                        <BasicInfo />
                    </TabPane>
                    <TabPane key="2" title="Security Settings">
                        <Typography.Paragraph>
                            Content of Tab Panel 3
                        </Typography.Paragraph>
                    </TabPane>
                    <TabPane key="3" title="Whether Verified">
                        <Typography.Paragraph>
                            Content of Tab Panel 4
                        </Typography.Paragraph>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default UserSetting;
