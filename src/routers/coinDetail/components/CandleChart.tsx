import { useParams } from "react-router-dom";
import { IGetCoinOlhvProps, useGetCoinOlhv } from "../hook/useGetCoinOlhv.tsx";
import ReactApexChart from "react-apexcharts";

function CandleChart() {
    const { coinId } = useParams();
    const safeCoins = coinId || "";
    const { data, isLoading, error } = useGetCoinOlhv(safeCoins, 7);

    // ApexCharts 데이터 및 옵션 설정 (Candlestick Chart)
    const chartData = data
        ? {
            series: [
                {
                    name: "Candlestick",
                    data: data.map(([time, open, high, low, close]: IGetCoinOlhvProps) => ({
                        x: new Date(time),
                        y: [open, high, low, close], // Candlestick requires [open, high, low, close]
                    })),
                },
            ],
            options: {
                chart: {
                    type: "candlestick",
                    height: 350,
                    zoom: {
                        enabled: true,
                    },
                },
                title: {
                    text: "Candlestick Chart",
                    align: "left",
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        format: "MMM dd",
                    },
                },
                yaxis: {
                    title: {
                        text: "Price (USD)",
                    },
                },
                tooltip: {
                    x: {
                        format: "MMM dd HH:mm",
                    },
                },
            },
        }
        : null;

    if (isLoading) return <div>Loading...</div>;
    if (error || !chartData) return <div>Error loading chart</div>;

    return (
        <div className="w-3/4">
            <h1 className="ml-2.5 text-purple-700 uppercase">Candlestick Chart</h1>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="candlestick"
                height={350}
            />
        </div>
    );
}

export default CandleChart;
