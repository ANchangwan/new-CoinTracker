import {useParams} from "react-router-dom";
import {IinfoData} from "../types/type.ts";
import BoxContainer from "./boxContainer.tsx";
import PriceTrendIndicator from "./PriceTrendIndicator.tsx";


function CoinDetail({coin}:{coin:IinfoData}) {
    const {coinId} = useParams()

    return (
        <div className="bg-amber-900 text-white p-12 mr-4">
            <div className="flex gap-4 mb-2">
                <BoxContainer text={`Rank #${coin.market_cap_rank}`} />
                <BoxContainer text={coin.symbol}/>
            </div>
            <div className="flex items-center gap-4 mb-2">
                <img src={coin.image.small} alt=""/>
                <div className="uppercase font-semibold">{coinId}</div>
                <div className="text-xl text-white w-20 h-10 bg-green-400 flex justify-center items-center rounded-xl">
                    <PriceTrendIndicator data={coin}  />
                </div>
                <div className="text-xl text-white font-semibold ">{coin.tickers[0].last}</div>
            </div>

        </div>
    )
}

export default CoinDetail;