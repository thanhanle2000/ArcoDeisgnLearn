import { Button, Divider, Tag, Typography } from "@arco-design/web-react";
import {
    IconFile,
    IconFire,
    IconMobile,
    IconSettings,
    IconStorage,
} from "@arco-design/web-react/icon";
import { memo } from "react";
import {
    RightDashboardAnnouncementInterface,
    RightDashboardButtonInterface,
} from "src/Core";
import RightSideImageCarousel from "./RightSideImageCarousel";

function RightDashboardComponent() {
    const shortcutButtons: RightDashboardButtonInterface[] = [
        {
            label: "Management",
            icon: (
                <IconFile className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
        {
            label: "Statistic",
            icon: (
                <IconStorage className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
        {
            label: "Advance",
            icon: (
                <IconSettings className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
        {
            label: "Promotion",
            icon: (
                <IconMobile className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
        {
            label: "Marketing",
            icon: (
                <IconFire className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
    ];

    const recentButtons: RightDashboardButtonInterface[] = [
        {
            label: "Statistic",
            icon: (
                <IconStorage className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
        {
            label: "Management",
            icon: (
                <IconFile className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
        {
            label: "Advance",
            icon: (
                <IconSettings className="text-[color:var(--color-text-2)] w-[18px] h-[18px] group-hover:text-blue-500" />
            ),
        },
    ];

    const announcements: RightDashboardAnnouncementInterface[] = [
        {
            label: "Something",
            tag: <Tag color="red">Activity</Tag>,
        },
        {
            label: "Something1",
            tag: <Tag color="cyan">Info</Tag>,
        },
        {
            label: "Something2",
            tag: <Tag color="blue">Notice</Tag>,
        },
        {
            label: "Something3",
            tag: <Tag color="blue">Notice</Tag>,
        },
        {
            label: "Something4",
            tag: <Tag color="cyan">Info</Tag>,
        },
    ];
    return (
        <div className="col-span-12 xl:col-span-3 flex flex-col">
            <div className="bg-[color:var(--color-bg-1)] flex flex-col p-5">
                <div className="flex flex-row justify-between items-center">
                    <Typography>Shortcuts</Typography>
                    <Button type="text">See More</Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {shortcutButtons.map((button, index) => (
                        <div
                            className="flex flex-row justify-center items-center"
                            key={index}
                        >
                            <Button
                                className={`flex flex-col justify-center items-center h-auto p-2 group hover:!bg-transparent`}
                                type="text"
                            >
                                <div className="!bg-[color:var(--color-fill-2)] px-3 py-2 rounded-md">
                                    {button?.icon}
                                </div>
                                <span className="text-[12px] ">
                                    <Typography
                                        className={`group-hover:text-blue-500`}
                                    >
                                        {button?.label}
                                    </Typography>
                                </span>
                            </Button>
                        </div>
                    ))}
                </div>
                <Divider />
                <div className="">
                    <Typography>Recent</Typography>
                    <div className="grid grid-cols-3 gap-4">
                        {recentButtons.map((button, index) => (
                            <Button
                                key={index}
                                className={`flex flex-col justify-center items-center h-auto p-2 group hover:!bg-transparent`}
                                type="text"
                            >
                                <div className="!bg-[color:var(--color-fill-2)] px-3 py-2 rounded-md">
                                    {button?.icon}
                                </div>
                                <span className="text-[12px] ">
                                    <Typography
                                        className={`group-hover:text-blue-500`}
                                    >
                                        {button?.label}
                                    </Typography>
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <RightSideImageCarousel />
            </div>
            <div className="mt-4 bg-[color:var(--color-bg-1)] flex flex-col p-5">
                <div className="flex flex-row items-center justify-between">
                    <Typography>Announcement</Typography>
                    <Button type="text">See More</Button>
                </div>
                <div>
                    {announcements?.map((announ, index) => (
                        <div
                            className="flex flex-row items-center mt-1"
                            key={index}
                        >
                            {announ?.tag}
                            <span className="ms-1">{announ?.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 bg-[color:var(--color-bg-1)] flex flex-col p-5">
                <div className="flex flex-row items-center justify-between">
                    <Typography>Document</Typography>
                    <Button type="text">See More</Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button type="text">React Quick Start</Button>
                    <Button type="text">Vue Quick Start</Button>
                    <Button type="text">DesignLab</Button>
                    <Button type="text">Material Market</Button>
                </div>
            </div>
        </div>
    );
}

export default memo(RightDashboardComponent);
