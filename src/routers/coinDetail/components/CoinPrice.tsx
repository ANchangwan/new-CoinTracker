import {useGetCoinDetail} from "../hook/useGetCoinDetailData.tsx";
import {useParams} from "react-router-dom";


function CoinPrice() {
    const {coinId} = useParams();
    const safeCoinId = coinId || "";
    const {data, isLoading} = useGetCoinDetail(safeCoinId);
    if(isLoading) return <div>loading...</div>;

    return data ? (
        <div className="flex gap-4 text-sm font-semibold h-full uppercase">
            {/* High and Low Prices */}
            <div className="flex flex-col bg-neutral-700 rounded-lg p-4 shadow-2xl w-1/6">
                <div>
                    <h2 className="opacity-70">High</h2>
                    <span className="text-green-400 text-xl">
                    $ {data.market_data.high_24h?.usd || "N/A"}
                </span>
                </div>
                <div>
                    <h2 className="opacity-70">Low</h2>
                    <span className="text-red-500 text-xl">
                    $ {data.market_data.low_24h?.usd || "N/A"}
                </span>
                </div>
            </div>

            {/* Market Cap and Fully Diluted Market Cap */}
            <div className="flex flex-col gap-2 bg-neutral-700 rounded-lg p-4 shadow-2xl w-1/6">
                <div>
                    <h1 className="opacity-70">Market Cap</h1>
                    <span className="text-xl">
                    $ {data.market_data.market_cap?.usd || "N/A"}
                </span>
                </div>
                <div>
                    <h2 className="opacity-70">Fully Diluted Market Cap</h2>
                    <span className="text-xl">
                    $ {data.market_data.fully_diluted_valuation?.usd || "N/A"}
                </span>
                </div>
            </div>

            {/* Total Volume */}
            <div className="flex flex-col bg-neutral-700 rounded-lg p-4 shadow-2xl w-1/6">
                <div>
                    <h2 className="opacity-70">Total Volume</h2>
                    <span className="text-xl">
                    $ {data.market_data.total_volume?.usd || "N/A"}
                </span>
                </div>
            </div>

            {/* Supply Information */}
            <div className="flex flex-col bg-neutral-700 rounded-lg p-4 shadow-2xl w-1/6">
                <div>
                    <h2 className="opacity-70">Circulating Supply</h2>
                    <span className="text-xl">
                    {data.market_data.circulating_supply || "N/A"}
                </span>
                </div>
                <div>
                    <h2 className="opacity-70">Max Supply</h2>
                    <span className="text-xl">
                    {data.market_data.max_supply || "N/A"}
                </span>
                </div>
                <div>
                    <h2 className="opacity-70">Total Supply</h2>
                    <span className="text-xl">
                    {data.market_data.total_supply || "N/A"}
                </span>
                </div>
            </div>
        </div>
    ) : null;
}

export default CoinPrice;