import {InfoData} from "../types/type.ts";
import {useParams} from "react-router-dom";



function PriceTrendIndicator({data}: { data: InfoData }) {
    const{coinId} = useParams();

    return (
        <div className={`${parseFloat(String(data.market_data.price_change_percentage_24h)) > 0 ? "bg-green-400":"bg-red-500"} 
            text-xl text-white w-20 h-10 flex justify-center items-center rounded-xl`}>
            <span>
                {String(data.market_data.price_change_percentage_24h).slice(0, 4)}
                {coinId ? "%" : "#"}
            </span>
        </div>
    )
}

export default PriceTrendIndicator;

