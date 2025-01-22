import {useQuery} from "@tanstack/react-query";
import {InfoData} from "../../../types/type.ts";
import {getCoinDetail} from "../api/api.ts";

export function useGetCoinDetail(coinId: string) {
    const oneHour = 1000 * 60 * 60;
    const {data,isLoading, error} = useQuery<InfoData>(
        {
            queryKey: [`${coinId} Detail`],
            queryFn:() => getCoinDetail(coinId),
            staleTime: oneHour
        }
    );
    return {data, isLoading,error};
}

