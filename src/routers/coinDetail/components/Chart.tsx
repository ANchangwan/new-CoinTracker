import { useParams } from "react-router-dom";
import {IGetCoinOlhvProps, useGetCoinOlhv} from "../hook/useGetCoinOlhv.tsx";
import ReactApexChart from "react-apexcharts";

function Chart() {
    const { coinId } = useParams();
    const safeCoins = coinId || "";
    const { data, isLoading, error } = useGetCoinOlhv(safeCoins, 7);

    // ApexCharts 데이터 및 옵션 설정

    const chartData = data
        ? {
            series: [
                {
                    name: "Price",
                    data: data.map(([ time, close ]: IGetCoinOlhvProps) => ({
                        x: new Date(time),
                        y: close,
                    })),
                },
            ],
            options: {
                chart: {
                    type: "line",
                    height: 350,
                    zoom: {
                        enabled: true,
                    },

                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        style: {
                            colors: "#FFFFFF", // 밝은 흰색 글씨
                            fontSize: "12px",
                            fontWeight: "bold",
                        },
                        format: "MMM dd",
                    },
                    title: {
                        text: "Date",
                        style: {
                            color: "#FFFFFF", // X축 제목도 흰색으로
                            fontSize: "14px",
                            fontWeight: "bold",
                        },
                    },
                },
                yaxis: {
                    title: {
                        text: "Price (USD)",
                        style: {
                            color: "#FFFFFF", // Y축 제목도 흰색으로
                            fontSize: "14px",
                            fontWeight: "bold",
                        },
                    },
                    labels: {
                        style: {
                            colors: "#FFFFFF", // Y축 레이블도 흰색
                            fontSize: "12px",
                        },
                    },
                },
                tooltip: {
                    x: {
                        format: "MMM dd HH:mm",
                    },
                },

                title: {
                    text: "Price Chart",
                    align: "left",
                    style: {
                        fontSize: "20px",
                        color: "#FFFFFF", // 제목 글씨 흰색
                        fontWeight: "bold",
                    },
                },
            },
        }
        : null;

    if (isLoading) return <div>Loading...</div>;
    if (error || !chartData) return <div>Error loading chart </div>;

    return (
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={350}
            />
    );
}

export default Chart;