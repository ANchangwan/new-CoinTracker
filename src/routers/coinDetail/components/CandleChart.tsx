import {  useGetCoinOlhv } from "../hook/useGetCoinOlhv.tsx";
import ApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";
import { ApexOptions } from "apexcharts";

function CandleChart() {
    const { coinId } = useParams();
    const safeCoins = coinId || "";
    const { data, isLoading, error } = useGetCoinOlhv(safeCoins, 7);


    const series = [
        {
            name: "Candlestick",
            data: data?.map((ohlv) => ({
                x: new Date(ohlv[0]), // 날짜 (타임스탬프)
                y: [ohlv[1], ohlv[2], ohlv[3], ohlv[4]], // [open, high, low, close]
            })) || [],
        },
    ];

    const options: ApexOptions = {
        chart: {
            type: "candlestick",
            height: 350,
            zoom: {
                enabled: true,
            },
        },
        title: {
            text: "CandleStick Chart",
            align: "left", // "left", "center", "right" 중 하나
            style: {
                fontSize: "20px",
                color: "#FFFFFF",
                fontWeight: "bold",
            },
        },
        xaxis: {
            type: "datetime",
            labels: {
                style: {
                    colors: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: "bold",
                },
                format: "MMM dd",
            },
            title: {
                text: "Date",
                style: {
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                },
            },
        },
        yaxis: {
            title: {
                text: "Price (USD)",
                style: {
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                },
            },
            labels: {
                style: {
                    colors: "#FFFFFF",
                    fontSize: "12px",
                },
            },
        },
        tooltip: {
            x: {
                format: "MMM dd HH:mm",
            },
        },
    };

    if (isLoading) return <div>Loading...</div>;
    if (error || !data) return <div>Error loading chart</div>;


    return (
        <ApexChart
            options={options}
            series={series}
            type="candlestick"
            height={350}
        />
    );
}

export default CandleChart;

