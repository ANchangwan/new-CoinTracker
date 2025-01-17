import {InfoData} from "../../../types/type.ts";


function CoinPrice({coin}:{coin:InfoData}) {

    return  (
        <div className="flex gap-2 *:text-sm *:font-semibold  h-full *:gap-4 *:uppercase *:w-1/6 *:shadow-2xl">
            <div className="flex w-12 flex-col  bg-neutral-700 rounded-lg  p-4 ">
                <div>
                    <h2 className="opacity-70">high</h2>
                    <span className="text-green-400 text-xl">$ {coin.market_data.high_24h.usd}</span>
                </div>
                <div>
                    <h2 className="opacity-70">low</h2>
                    <span className="text-red-500 text-xl">$ {coin.market_data.low_24h.usd}</span>
                </div>
            </div>
            <div className="flex aspect-square flex-col gap-2 bg-neutral-700 rounded-lg p-4 ">
                <div className="flex flex-col gap-2">
                    <h2 className="opacity-70">market cap</h2>
                    <span className="text-xl">$ {coin.market_data.market_cap.usd}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="opacity-70">Fully Diluted Market Cap</h2>
                    <span className="text-xl">$ {coin.market_data.low_24h.usd}</span>
                </div>
            </div>
            <div className="flex aspect-square flex-col gap-2 bg-neutral-700 rounded-lg p-4 ">
                <div className="flex flex-col gap-2">
                    <h2 className="opacity-70">total_volume</h2>
                    <span className="text-xl">$ {coin.market_data.total_volume.usd}</span>
                </div>
            </div>
            <div className="flex aspect-square flex-col gap-2 bg-neutral-700 rounded-lg p-4">
                <div className="flex flex-col gap-2">
                    <h2 className="opacity-70">Circulating Supply</h2>
                    <span className="text-xl">{coin.market_data.circulating_supply}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="opacity-70">Max Supply</h2>
                    <span className="text-xl">{coin.market_data.max_supply}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="opacity-70">Circulating Supply</h2>
                    <span className="text-xl">{coin.market_data.total_supply}</span>
                </div>
            </div>
        </div>
    );
}

export default CoinPrice;