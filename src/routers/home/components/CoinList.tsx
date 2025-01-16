
import {CoinProps} from "../../../types/type.ts";
import {Link} from "react-router-dom";



function CoinList({ coins }: { coins: CoinProps[] }) {
    return (
        <>
            {coins.map((coin) => (
                <Link to={`/coin/${coin.id}`} key={coin.id}>
                    <div className="bg-[#202841] rounded-xl p-4 flex flex-col justify-between h-44">
                        <div className="flex flex-col justify-start items-start space-y-1">
                            <div className="flex items-center gap-2">
                                <img className="w-8 h-8" src={coin.image} alt={coin.id}/>
                                <h1 className="text-white uppercase font-semibold text-sm">{coin.id}</h1>
                            </div>
                            <span className="text-white text-xl">$ {coin.current_price}</span>
                        </div>
                        <div className="flex flex-col items-end justify-end text-xl font-semibold">
                            <span className="opacity-50">
                                ${parseFloat(String(coin.price_change_24h)) > 0 ? "+" : ""}
                                {String(coin.price_change_24h).slice(0, 4)}
                            </span>
                            <span className={`${
                                parseFloat(String(coin.price_change_percentage_24h)) < 0
                                    ? 'text-red-500'
                                    : parseFloat(String(coin.price_change_percentage_24h)) > 0
                                        ? 'text-green-500'
                                        : 'text-gray-500'
                            }`}>
                                {String(coin.price_change_percentage_24h).slice(0,4)}%
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default CoinList;