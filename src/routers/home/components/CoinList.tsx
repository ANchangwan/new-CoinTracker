import {Link} from "react-router-dom";
import {useGetCoinData} from "../hook/useGetCoinData.tsx";



function CoinList() {
    const { data, isLoading } = useGetCoinData();

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            {data ? (
                data.map((coin) => (
                    <Link to={`/coin/${coin.id}`} key={coin.id}>
                        <div className="bg-[#202841] rounded-xl p-4 flex flex-col justify-between h-44 max-w-screen-sm">
                            <div className="flex flex-col justify-start items-start space-y-1">
                                <div className="flex items-center gap-2">
                                    <img className="w-8 h-8" src={coin.image} alt={coin.id} />
                                    <h1 className="text-white uppercase font-semibold text-sm">{coin.id}</h1>
                                </div>
                                <span className="text-white text-xl">$ {coin.current_price}</span>
                            </div>
                            <div className="flex flex-col items-end justify-end text-xl font-semibold">
                                <span className="opacity-50">
                                    {parseFloat(String(coin.price_change_24h)) > 0 ? "+" : ""}
                                    {String(coin.price_change_24h).slice(0, 4)}
                                </span>
                                <span
                                    className={`${
                                        parseFloat(String(coin.price_change_percentage_24h)) < 0
                                            ? "text-red-500"
                                            : parseFloat(String(coin.price_change_percentage_24h)) > 0
                                                ? "text-green-500"
                                                : "text-gray-500"
                                    }`}
                                >
                                    {String(coin.price_change_percentage_24h).slice(0, 4)}%
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <div>No data available</div>
            )}
        </>
    );
}

export default CoinList;