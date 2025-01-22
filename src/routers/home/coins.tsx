import CoinList from "./components/CoinList.tsx";


function Coins(){
    return (
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4">
           <CoinList />
        </div>
    );
}

export default Coins;