import { Chart, Axis, LineAdvance } from "bizcharts";
import { AxisCfg } from "bizcharts/lib/interface";
import { memo } from "react";

// const { Line } = Guide;

function ChartContentData() {
    const data = {
        keywordTrend: [
            { keyword: "arco", dates: "2024-01", first: 23717 },
            { keyword: "arco", dates: "2024-02", first: 43110 },
            { keyword: "arco", dates: "2024-03", first: 24524 },
            { keyword: "arco", dates: "2024-04", first: 58000 },
            { keyword: "arco", dates: "2024-05", first: 52000 },
            { keyword: "arco", dates: "2024-06", first: 71000 },
            { keyword: "arco", dates: "2024-07", first: 49700 },
            { keyword: "arco", dates: "2024-08", first: 48500 },
            { keyword: "arco", dates: "2024-09", first: 63900 },
            { keyword: "arco", dates: "2024-10", first: 22600 },
            { keyword: "arco", dates: "2024-11", first: 69000 },
            { keyword: "arco", dates: "2024-12", first: 35800 },
        ],
    };

    const colors = [
        "l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1",
    ];

    const DateAxisConfig: AxisCfg = {
        label: {
            style: {
                textAlign: "center",
            },
        },
        line: {
            style: {
                stroke: "#ccc",
                lineDash: [2, 3],
            },
        },
        grid: {
            line: {
                style: {
                    stroke: "#ccc",
                    lineDash: [2, 3],
                },
            },
        },
    };
    const FirstAxisConfig: AxisCfg = {
        label: {
            style: {
                textAlign: "center",
            },
        },
        line: {
            style: {
                stroke: "#ccc",
                lineDash: [2, 3],
            },
        },
        grid: {
            line: {
                style: {
                    stroke: "#ccc",
                    lineDash: [2, 3],
                },
            },
        },
    };

    const cols = {
        dates: {
            range: [0, 1],
            type: "timeCat",
            tickCount: 12,
        },
    };

    return (
        <Chart
            height={400}
            data={data.keywordTrend}
            scale={cols}
            padding={[40, 80, 70, 80]}
            autoFit
        >
            <Axis name="dates" {...DateAxisConfig} label={{ offset: 10 }} />
            <Axis name="first" {...FirstAxisConfig} label={{ offset: 10 }} />
            <LineAdvance
                shape="smooth"
                position="dates*first"
                size={4}
                color={["keyword", colors]}
            />
        </Chart>
    );
}

export default memo(ChartContentData);
