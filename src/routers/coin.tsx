import {useEffect, useState} from "react";
import {CoinProps} from "../types/type.ts";



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


    return (
        <div className="grid grid-cols-4 gap-x-44 gap-y-2">
            {coins.slice(0, 20).map((coin, i) => (
                <div key={i}  className="w-64 h-48 bg-amber-900 rounded-xl p-4 flex flex-col">
                    <div className="flex flex-col flex-grow justify-start items-start">
                        <div className="flex gap-2 ">
                            <img className="size-2/6" src={coin.image}/>
                            <h1 className="text-white uppercase font-semibold">{coin.id}</h1>
                        </div>
                        <span className="text-white text-2xl">$ {coin.current_price}</span>
                    </div>
                    <div className="flex flex-col items-end justify-end text-xl font-semibold">
                        <span className="opacity-50">${coin.current_price}</span>
                        <span className={` ${parseFloat(String(coin.price_change_percentage_24h)) < 0 ? 'text-red-500' : 
                            parseFloat(String(coin.price_change_percentage_24h)) > 0 ? 'text-green-500' : 'text-gray-500'}`}>
                            {coin.price_change_percentage_24h}%
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Coin;