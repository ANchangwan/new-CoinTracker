import {CoinProps} from "../../types/type.ts";
import { useQuery } from '@tanstack/react-query';
import {getCoinAPi} from "../../api/apis.ts";
import CoinList from "./components/CoinList.tsx";




function Coins(){
    const {data, isLoading} = useQuery<CoinProps[]>({
        queryKey: ['Coin Data'],
        queryFn: getCoinAPi,
        staleTime: 1000 * 60 * 60
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {isLoading ? <div>...Loading</div> : <CoinList coins={data ?? []} />}
        </div>
    );
}

export default Coins;