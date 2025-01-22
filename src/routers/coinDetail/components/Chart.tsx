import { useParams } from "react-router-dom";
import { useGetCoinOlhv } from "../hook/useGetCoinOlhv.tsx";
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
                    data: data.map(([time, , , , close]) => ({
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
    if (error || !chartData) return <div>Error loading chart data</div>;

    // @ts-ignore
    return (
        <div className="w-3/4">
            <h1 className="ml-2.5 text-purple-700 uppercase">Price Chart</h1>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={350}
            />
        </div>
    );
}

export default Chart;