import {useQuery} from "@tanstack/react-query";

import { getCoinOhlc } from "../api/api.ts";

export type IOhlvData = [number,number, number,number,number];




export function useGetCoinOlhv(coinId: string,days:number) {
    const oneHour = 1000 * 60 * 60;

    const {data, isLoading, error} = useQuery<IOhlvData[]>(
        {
            queryKey: [`${coinId} ohlv days ${days}`],
            queryFn:() => getCoinOhlc(coinId,days),
            staleTime: oneHour
        }
    );

    return {data, isLoading,error};
}
