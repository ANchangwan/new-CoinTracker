import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import { getCoinDetail} from "../api/apis.ts";
import BackBtn from "../components/BackBtn.tsx";
import CoinDetail from "../components/CoinDetail.tsx";
import {IinfoData} from "../types/type.ts";

function Coin() {
  const { coinId } = useParams();
  if(!coinId) throw new Error("Coin not found!");
  const {isLoading, data}=useQuery<IinfoData>(
      {
        queryKey: [`${coinId} Detail`],
        queryFn:() => getCoinDetail(coinId),
        staleTime: 1000 * 60 * 60
      }
  )
    if(isLoading) return <div>loading...</div>
    console.log(data);
  return (
          <div className="flex flex-col gap-4 text-blue-500 text-6xl">
              <BackBtn/>
              {!data ? <div>loading...</div> : <CoinDetail coin={data}/>}
          </div>
  );
}

export default Coin;
