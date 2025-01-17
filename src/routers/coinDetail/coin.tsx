import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import BackBtn from "../../globalComponents/BackBtn.tsx";
import CoinDetail from "./components/CoinDetail.tsx";
import {getCoinDetail} from "./api/api.ts";
import {InfoData} from "../../types/type.ts";
import CoinPrice from "./components/CoinPrice.tsx";


function useGetCoinDetail(coinId: string) {
    const oneHour = 1000 * 60 * 60;
    const {data,isLoading} = useQuery<InfoData>(
        {
            queryKey: [`${coinId} Detail`],
            queryFn:() => getCoinDetail(coinId),
            staleTime: oneHour
        }
    );
    return {data, isLoading};
}

function Coin() {
    const {coinId} = useParams();
    if (!coinId) {
        throw new Error("Coin not found.");
    }
    const {data, isLoading} = useGetCoinDetail(coinId);

    if(isLoading) return <div>loading...</div>

    return (
        <div className="flex flex-col gap-4 text-blue-500 text-6xl w-screen">
            <BackBtn/>
            <div className="bg-amber-900 text-white p-12 mr-4  flex flex-col gap-4">
                {!data ? <div>loading...</div> : <CoinDetail coin={data}/>}
                <div>
                    {!data ? <div>loading</div> : <CoinPrice coin={data}/>}
                </div>
            </div>
            <span>chart</span>
        </div>
    );
}

export default Coin;
