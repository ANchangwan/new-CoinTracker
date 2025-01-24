import {useParams} from "react-router-dom";

import BackBtn from "../../globalComponents/BackBtn.tsx";
import CoinDetail from "./components/CoinDetail.tsx";
import CoinPrice from "./components/CoinPrice.tsx";
import {useGetCoinDetail} from "./hook/useGetCoinDetailData.tsx";
import CoinChartComponent from "./components/Chart-component.tsx";


function Coin() {
    const {coinId} = useParams();
    if (!coinId) {
        throw new Error("Coin not found.");
    }
    const {data, isLoading} = useGetCoinDetail(coinId);

    if(isLoading) return <div>loading...</div>

    return (
        <div className="flex flex-col gap-4 text-6xl">
            <div className="py-5">
                <BackBtn/>
            </div>
            <div className="text-white flex flex-col gap-6">
                {!data ? <div>loading...</div> : <CoinDetail />}
                <div>
                    {!data ? <div>loading</div> : <CoinPrice/>}
                </div>
            </div>

            <CoinChartComponent/>

        </div>
    );
}

export default Coin;
