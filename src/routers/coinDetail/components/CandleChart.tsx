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
                    // 캔들스틱 데이터는 [open, high, low, close] 배열 형식을 사용
                    data: data.map(
                        ([time, open, high, low, close]: IGetCoinOlhvProps) => ({
                            x: new Date(time),
                            y: [open, high, low, close],
                        })
                    ),
                },
            ],
            options: {
                chart: {
                    type: "candlestick",
                    height: 350,
                    zoom: {
                        enabled: true, // 줌 기능 활성화
                    },
                },
                title: {
                    text: "Candlestick Chart",
                    align: "left",
                    style: {
                        fontSize: "20px",
                        color: "#FFFFFF", // 흰색 제목
                        fontWeight: "bold",
                    },
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        style: {
                            colors: "#FFFFFF", // X축 라벨 흰색
                            fontSize: "12px",
                            fontWeight: "bold",
                        },
                        format: "MMM dd", // 날짜 형식
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
                            colors: "#FFFFFF", // Y축 라벨 흰색
                            fontSize: "12px",
                        },
                    },
                },
                tooltip: {
                    x: {
                        format: "MMM dd HH:mm", // 툴팁의 X축 데이터 포맷
                    },
                },
            },
        }
        : null;

    if (isLoading) return <div>Loading...</div>;
    if (error || !chartData) return <div>Error loading chart</div>;

    return (

            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="candlestick"
                height={350}
            />

    );
}

export default CandleChart;
