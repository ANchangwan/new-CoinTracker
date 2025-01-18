import CoinList from "./components/CoinList.tsx";
import {useGetCoinData} from "./hook/useGetCoinData.tsx";

function Coins(){

    const {data, isLoading} = useGetCoinData();

    return (
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4">
            {isLoading ? <div>...Loading</div> : <CoinList coins={data ?? []} />}
        </div>
    );
}

export default Coins;