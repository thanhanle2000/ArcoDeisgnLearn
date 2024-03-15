import {
    Chart,
    Interval,
    Axis,
    Tooltip,
    Coordinate,
    Legend,
    View,
} from "bizcharts";
import DataSet from "@antv/data-set";
import { memo } from "react";

const ChartContentCategory = () => {
    const data = [];

    for (let i = 0; i < 24; i++) {
        const item: { type: string; value: number } = {
            type: i.toString(),
            value: 10,
        };
        data.push(item);
    }

    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(data).transform({
        type: "percent",
        field: "value",
        dimension: "type",
        as: "percent",
    });
    const userData = [
        { type: "Data 1", value: 16 },
        { type: "Data 2", value: 36 },
        { type: "Data 3", value: 48 },
    ];
    const userDv = new DataView();
    userDv.source(userData).transform({
        type: "percent",
        field: "value",
        dimension: "type",
        as: "percent",
    });

    // const cols = {
    //     percent: {
    //         formatter: (val) => {
    //             return (val * 100).toFixed(2) + "%";
    //         },
    //     },
    //     value: {
    //         formatter: (val) => {
    //             return (val * 100).toFixed(2) + "%";
    //         },
    //     },
    // };

    return (
        <Chart placeholder={false} height={500} padding={50} autoFit>
            <Legend visible={false} />
            {/* 背景图层 */}
            <View data={dv.rows}>
                <Legend visible={true} />
                <Tooltip shared showTitle={false} />
                <Coordinate type="theta" innerRadius={0.9} />
                <Interval
                    position="percent"
                    adjust="stack"
                    color={["type", ["rgba(255, 255, 255, 0)"]]}
                    style={{
                        stroke: "#444",
                        lineWidth: 1,
                    }}
                    tooltip={false}
                />
            </View>
            <View data={data}>
                <Axis visible={false} />
                <Coordinate type="polar" innerRadius={0.9} />
                <Interval
                    position="type*value"
                    color="#444"
                    tooltip={false}
                    size={[
                        "type",
                        (val) => {
                            if (val % 3 === 0) {
                                return 4;
                            }
                            return 1;
                        },
                    ]}
                />
            </View>
            {/* 绘制图形 */}
            <View
                data={userDv.rows}
                scale={{
                    percent: {
                        formatter: (val) => {
                            return (val * 100).toFixed(2) + "%";
                        },
                    },
                }}
            >
                <Coordinate type="theta" innerRadius={0.75} />
                <Interval
                    position="percent"
                    adjust="stack"
                    color="type"
                    label={["type", { offset: 40 }]}
                />
            </View>
        </Chart>
    );
};

export default memo(ChartContentCategory);
