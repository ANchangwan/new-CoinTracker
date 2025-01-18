import {useQuery} from "@tanstack/react-query";
import {CoinProps} from "../../../types/type.ts";
import {getCoinAPi} from "../api/api.ts";

export function useGetCoinData(){
    const oneHour = 1000 * 60 * 60
    const {data, isLoading} = useQuery<CoinProps[]>({
        queryKey: ['Coin Data'],
        queryFn: getCoinAPi,
        staleTime: oneHour
    });
    return {data, isLoading};
}