import {useQuery} from "@tanstack/react-query";

import { getCoinOhlc } from "../api/api.ts";

interface IGetCoinOlhvProps {
    time:number;
    open:number;
    high:number;
    low:number;
    close:number;
}

export function useGetCoinOlhv(coinId: string,days:number) {
    const oneHour = 1000 * 60 * 60;

    const {data, isLoading, error} = useQuery<IGetCoinOlhvProps[]>(
        {
            queryKey: [`${coinId} ohlv`],
            queryFn:() => getCoinOhlc(coinId,days),
            staleTime: oneHour
        }
    );

    return {data, isLoading,error};
}
