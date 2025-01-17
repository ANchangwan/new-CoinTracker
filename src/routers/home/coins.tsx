import {CoinProps} from "../../types/type.ts";
import { useQuery } from '@tanstack/react-query';
import CoinList from "./components/CoinList.tsx";
import {getCoinAPi} from "./api/api.ts";



function useGetCoinData(){
    const oneHour = 1000 * 60 * 60
    const {data, isLoading} = useQuery<CoinProps[]>({
        queryKey: ['Coin Data'],
        queryFn: getCoinAPi,
        staleTime: oneHour
    });
    return {data, isLoading};
}


function Coins(){

    const {data, isLoading} = useGetCoinData();

    return (
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4">
            {isLoading ? <div>...Loading</div> : <CoinList coins={data ?? []} />}
        </div>
    );
}

export default Coins;