import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import { getCoinDetail} from "../api/apis.ts";
import BackBtn from "../components/BackBtn.tsx";

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
      <div className="text-blue-500 text-6xl">
        <BackBtn/>
      </div>
  );
}

export default Coins;
