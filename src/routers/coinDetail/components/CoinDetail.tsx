import {useParams} from "react-router-dom";
import {InfoData} from "../../../types/type.ts";
import BoxContainer from "../../../globalComponents/boxContainer.tsx";
import PriceTrendIndicator from "../../../utils/PriceTrendIndicator.tsx";




function CoinDetail({coin}:{coin:InfoData}) {
    const {coinId} = useParams();

    return (
        <>
            <div className="flex gap-4 mb-2">
                <BoxContainer text={`Rank #${coin.market_cap_rank}`} />
                <BoxContainer text={coin.symbol}/>
            </div>
            <div className="flex items-center gap-4 mb-2 flex-col sm:flex-row">
                <img src={coin.image.small} alt=""/>
                <div className="uppercase font-semibold">{coinId}</div>
                <div className="text-xl text-white w-20 h-10 flex justify-center items-center rounded-xl">
                    <PriceTrendIndicator data={coin}  />
                </div>
                <div className="text-xl text-white font-semibold ">{coin.tickers[0].last}</div>
            </div>

        </>
    )
}

export default CoinDetail;