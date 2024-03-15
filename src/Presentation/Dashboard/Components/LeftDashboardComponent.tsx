import { memo, useState } from "react";

import { Button, Divider, Radio, Typography } from "@arco-design/web-react";
import DataCategories from "./DataCategories";
import ChartContentData from "./ChartContentData";

import TableCpn from "./TableCpn";
import ChartContentCategory from "./ChartContentCategory";

function LeftDashboardComponent() {
    const [tab, setTab] = useState("Text");
    return (
        <div className="col-span-12 xl:col-span-9 flex flex-col flex-wrap">
            <div className="w-full p-5 bg-[color:var(--color-bg-1)] flex flex-col">
                <Typography>Welcome Back, 王立群</Typography>
                <Divider />
                <DataCategories />
                <Divider />
                <div className={`w-full flex flex-col`}>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <Typography className={`text-base`}>
                                Content Data
                            </Typography>
                            <Typography
                                className={`font-light text-xs`}
                            >{`(Nearly 1 year)`}</Typography>
                        </div>
                        <Button type="text">See more</Button>
                    </div>
                    <div className="overflow-x-auto">
                        <ChartContentData />
                    </div>
                </div>
            </div>
            <div className={`grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4`}>
                <div
                    className={`flex flex-col bg-[color:var(--color-bg-1)] p-5`}
                >
                    <div className={`flex flex-col`}>
                        <div className="flex flex-row justify-between items-center mb-3">
                            <div>
                                <Typography className={`text-base`}>
                                    Popular Contents
                                </Typography>
                            </div>
                            <Button type="text">See more</Button>
                        </div>
                        <div className={``}>
                            <Radio.Group
                                type="button"
                                name="position"
                                value={tab}
                                onChange={setTab}
                                style={{ marginBottom: 40 }}
                                options={["Text", "Image", "Video"]}
                            ></Radio.Group>
                        </div>
                        <div>
                            <TableCpn />
                        </div>
                    </div>
                </div>
                <div
                    className={`flex flex-col bg-[color:var(--color-bg-1)] p-5`}
                >
                    <div className={`flex flex-col`}>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <Typography className={`text-base`}>
                                    Percentage of content categories
                                </Typography>
                            </div>
                        </div>
                        <div className={``}>
                            <ChartContentCategory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(LeftDashboardComponent);
