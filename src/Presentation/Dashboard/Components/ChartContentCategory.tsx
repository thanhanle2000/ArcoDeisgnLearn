import { DonutChart } from "bizcharts";
import { memo } from "react";

const ChartContentCategory = () => {
    const data = [
        { type: "Data 1", value: 148564, value2: 16, color: "#35cefe" },
        { type: "Data 2", value: 334271, value2: 36, color: "#3d47ad" },
        { type: "Data 3", value: 445695, value2: 48, color: "#35a2ff" },
    ];

    return (
        <DonutChart
            data={data || []}
            autoFit
            height={300}
            radius={1}
            innerRadius={0.75}
            padding="auto"
            angleField="value"
            colorField="type"
            color={data.map((item) => {
                return item.color;
            })}
            label={{
                type: "spider",
                formatter: (angleField) => {
                    return angleField["value2"];
                },
            }}
            pieStyle={{ stroke: "white", lineWidth: 1 }}
            statistic={{
                title: {
                    content: "Total",
                },
                content: {
                    content: data
                        .reduce(
                            (accumulator, currentValue) =>
                                accumulator + currentValue.value,
                            0
                        )
                        .toString(),
                },
            }}
            legend={{ position: "bottom" }}
        />
    );
};

export default memo(ChartContentCategory);
