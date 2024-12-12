import {IinfoData} from "../types/type.ts";



function PriceTrendIndicator({data}: { data: IinfoData }) {
    console.log(data, "data");
    return (
        <span className={`${
            parseFloat(String(data)) < 0
                ? 'text-red-500'
                : parseFloat(String(data)) > 0
                    ? 'text-white-500'
                    : 'text-gray-500'
        }`}>
            {String(data).slice(0, 4)}%
        </span>
    )
}

export default PriceTrendIndicator;