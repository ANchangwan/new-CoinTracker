import {useEffect, useState} from "react";
import {CoinProps} from "../types/type.ts";
import { Link } from "react-router-dom";


function Coin(){
    const [coins, setCoins] = useState<CoinProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() =>{
        (async ()=>{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`);
            const data = await response.json();
            setCoins(data);
            setIsLoading(true);
        })()
    },[]);

    // coin atomic 패턴으로 리팩토링
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {coins.map((coin, i) => (
                <Link to={`/coin/${coin.id}`} key={i}>
                    <div className="bg-amber-900 rounded-xl p-4 flex flex-col justify-between h-44">
                        <div className="flex flex-col justify-start items-start space-y-1">
                            <div className="flex items-center gap-2">
                                <img className="w-8 h-8" src={coin.image} alt={coin.id}/>
                                <h1 className="text-white uppercase font-semibold text-sm">{coin.id}</h1>
                            </div>
                            <span className="text-white text-xl">$ {coin.current_price}</span>
                        </div>
                        <div className="flex flex-col items-end justify-end text-xl font-semibold">
                            <span className="opacity-50">${coin.current_price}</span>
                            <span className={`${parseFloat(String(coin.price_change_percentage_24h)) < 0 ? 'text-red-500' :
                                parseFloat(String(coin.price_change_percentage_24h)) > 0 ? 'text-green-500' : 'text-gray-500'}`}>
                            {String(coin.price_change_percentage_24h).slice(0,4)}%
                        </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Coin;