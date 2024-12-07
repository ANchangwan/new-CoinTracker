import {useParams} from "react-router-dom";


function CoinDetail() {
    const {coinId} = useParams()
    return (
        <div className="bg-amber-900 text-white">
            <div className="uppercase font-semibold">{coinId}</div>
        </div>
    )
}

export default CoinDetail;