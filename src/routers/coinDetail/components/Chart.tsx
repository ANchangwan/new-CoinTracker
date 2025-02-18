import { useParams } from "react-router-dom";
import { useGetCoinOlhv} from "../hook/useGetCoinOlhv";
import ApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";



function Chart() {
    const { coinId } = useParams<{ coinId: string }>();
    const safeCoins = coinId || "";
    const { data, isLoading, error } = useGetCoinOlhv(safeCoins, 7);



    const series: ApexAxisChartSeries = [
        {
            name: "Price",
            data: data?.map((price) => ({
                x: new Date(price[0]).getTime(),
                y: price[3],
            })) || [],
        },
    ];

    const options: ApexOptions = {
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
        title: {
            text: "Price Chart",
            align: "left",
            style: {
                fontSize: "20px",
                color: "#FFFFFF",
                fontWeight: "bold",
            },
        },
    };

    if (isLoading) return <div>Loading...</div>;
    if (error || !data) return <div>Error loading chart</div>;

    return (
        <ApexChart
            type="line"
            options={options}
            series={series}
            height={350}
        />
    );
}

export default Chart;