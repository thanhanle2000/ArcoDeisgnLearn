import { Avatar, Button, Tabs, Tag, Typography } from "@arco-design/web-react";
import { IconCamera } from "@arco-design/web-react/icon";
import BasicInfo from "./Components/BasicInfo";
import WhetherVerifiedContainer from "./Components/WhetherVerifiedContainer";
import { ELEMENT_ID } from "src/Core";
import tailwindConfig from "../../../tailwind.config";

const TabPane = Tabs.TabPane;

function UserSetting() {
    return (
        <div className="flex flex-col justify-start items-start">
            <div
                id={ELEMENT_ID?.USERSETTINGINFO}
                className="w-full rounded p-2 !bg-[color:var(--color-bg-2)]"
            >
                <div className="grid grid-cols-12 gap-2 p-2">
                    <div className="col-span-12 md:col-span-2 flex flex-row justify-center md:justify-start items-center">
                        <Avatar
                            className="w-16 h-16 md:w-28 md:h-28"
                            triggerIcon={<IconCamera />}
                            triggerType="mask"
                        >
                            <img
                                alt="avatar"
                                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                            />
                        </Avatar>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-row justify-center items-center gap-4">
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
                    <div className="col-span-12 md:col-span-6 flex flex-row justify-center items-center gap-4">
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
                                <Tag
                                    color={
                                        tailwindConfig?.theme?.extend?.colors
                                            ?.CGREEN
                                    }
                                >
                                    verified
                                </Tag>
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
            <div
                id={ELEMENT_ID?.USERSETTINGTABCONTAINER}
                className="w-full mt-2 rounded p-5 !bg-[color:var(--color-bg-2)]"
            >
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
                        <WhetherVerifiedContainer />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default UserSetting;
