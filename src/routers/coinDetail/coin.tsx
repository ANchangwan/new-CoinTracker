import {redirect, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import { getCoinDetail} from "../../api/apis.ts";
import BackBtn from "../../globalComponents/BackBtn.tsx";
import CoinDetail from "./components/CoinDetail.tsx";
import {InfoData} from "../../types/type.ts";



function useCoinDetail(coinId: string) {
    return useQuery<InfoData>(
        {
            queryKey: [`${coinId} Detail`],
            queryFn:() => getCoinDetail(coinId),
            staleTime: 1000 * 60 * 60
        }
    )
}

function Coin() {
    const {coinId} = useParams();
    if (!coinId) {
        redirect("/");
        throw new Error("Coin not found.");
    }
    const {data, isLoading} = useCoinDetail(coinId);

    if(isLoading) return <div>loading...</div>

    return (
        <div className="flex flex-col gap-4 text-blue-500 text-6xl">
            <BackBtn/>
            <div className="bg-amber-900 text-white p-12 mr-4">
                {!data ? <div>loading...</div> : <CoinDetail coin={data}/>}
            </div>
            <span>chart</span>
        </div>
    );
}

export default Coin;
