import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import { getCoinDetail} from "../api/apis.ts";
import BackBtn from "../components/BackBtn.tsx";
import CoinDetail from "../components/CoinDetail.tsx";

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

  return (
          <div className="flex flex-col gap-4 text-blue-500 text-6xl">
              <BackBtn/>
              <CoinDetail/>
          </div>
  );
}

export default Coins;
