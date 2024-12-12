import {IinfoData} from "../types/type.ts";



function PriceTrendIndicator({data}: { data: IinfoData }) {

    return (
        <span className={`${
            parseFloat(String(data.market_data.price_change_percentage_24h)) < 0
                ? 'text-red-500'
                : parseFloat(String(data.market_data.price_change_percentage_24h)) > 0
                    ? 'text-white-500'
                    : 'text-gray-500'
        }`}>
            {String(data.market_data.price_change_percentage_24h).slice(0, 4)}%
        </span>
    )
}

export default PriceTrendIndicator;