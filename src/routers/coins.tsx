import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {useQuery} from "@tanstack/react-query";
import {getCoinAPi, getCoinDetail} from "../api/apis.ts";

function Coins() {
  const { coinId } = useParams();
  if(!coinId) throw new Error("Coins not found!");
  const {isLoading, data}=useQuery(
      {
        queryKey: [`${coinId} Detail`],
        queryFn:() => getCoinDetail(coinId),
        staleTime: 1000 * 60 * 60
      }
  )
  console.log(data,isLoading)
  return <h1 className="text-blue-500 text-6xl">coin {coinId}</h1>;
}

export default Coins;
