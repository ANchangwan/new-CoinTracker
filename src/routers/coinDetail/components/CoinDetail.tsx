import {useParams} from "react-router-dom";
import BoxContainer from "../../../globalComponents/boxContainer.tsx";
import PriceTrendIndicator from "../../../utils/PriceTrendIndicator.tsx";
import {useGetCoinDetail} from "../hook/useGetCoinDetailData.tsx";




function CoinDetail() {
    const {coinId} = useParams();
    const safeCoinId = coinId || "";
    const {data, isLoading} = useGetCoinDetail(safeCoinId);


    if (!coinId) return <div>Error: Invalid coin ID</div>;
    if(isLoading) return <div>loading...</div>;

    return (
        data ? (
            <div>
                <div className="flex gap-4 mb-2">
                    <BoxContainer text={`Rank #${data.market_cap_rank}`}/>
                    <BoxContainer text={data.symbol.toUpperCase()}/>
                </div>

                <div className="flex items-center gap-4 mb-2 flex-col sm:flex-row">
                    <img src={data.image.small} alt={`${coinId} logo`}/>
                    <div className="uppercase font-semibold">{coinId}</div>
                    <div className="text-xl text-white w-20 h-10 flex justify-center items-center rounded-xl">
                        <PriceTrendIndicator data={data}/>
                    </div>
                    {/*<div className="text-xl text-white font-semibold">*/}
                    {/*    {data.tickers[0]?.last || "N/A"}$*/}
                    {/*</div>*/}
                </div>
            </div>
        ) : null
    );
}

export default CoinDetail;