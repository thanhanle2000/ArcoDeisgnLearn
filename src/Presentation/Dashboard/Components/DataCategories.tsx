import { Avatar, Divider, Space, Typography } from "@arco-design/web-react";
import { IconCaretUp } from "@arco-design/web-react/icon";
import { memo, useMemo } from "react";
import { DataCategoryItemInterface } from "src/Core";

function DataCategories() {
    // DATA
    const dataCategory: DataCategoryItemInterface[] = useMemo(
        () => [
            {
                label: "Total online data",
                data: "373.5w+",
                unit: "pecs",
            },
            {
                label: "Content in market",
                data: "368",
                unit: "pecs",
            },
            {
                label: "Comments",
                data: "8874",
                unit: "pecs",
            },
            {
                label: "Growth",
                data: "2.8%",
                unit: <IconCaretUp className="text-green-400" />,
            },
        ],
        []
    );
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
            {dataCategory?.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-row justify-between items-center"
                >
                    <Space direction="horizontal">
                        <Avatar size={54} />
                        <Space direction="vertical">
                            <Typography className="text-xs">
                                {item?.label}
                            </Typography>
                            <Space direction="horizontal">
                                <Typography className="text-xl">
                                    {item?.data}
                                </Typography>
                                <Typography className="text-xs">
                                    {item?.unit}
                                </Typography>
                            </Space>
                        </Space>
                    </Space>
                    <Divider
                        type="vertical"
                        orientation="center"
                        className={`h-14 ${
                            index === dataCategory?.length - 1
                                ? "hidden"
                                : `${
                                      (index + 1) % 2 === 0
                                          ? "hidden"
                                          : "inline-block"
                                  } ${
                                      (index + 1) % 3 === 0
                                          ? "lg:hidden"
                                          : "lg:inline-block"
                                  } xl:inline-block`
                        }`}
                    />
                </div>
            ))}
        </div>
    );
}

export default memo(DataCategories);
