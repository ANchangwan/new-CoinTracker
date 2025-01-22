import { useGetCoinDetail } from "../hook/useGetCoinDetailData";
import { useParams } from "react-router-dom";

interface MarketData {
    high_24h: { usd: number | null };
    low_24h: { usd: number | null };
    market_cap: { usd: number | null };
    fully_diluted_valuation: { usd: number | null };
    total_volume: { usd: number | null };
    circulating_supply: number | null;
    max_supply: number | null;
    total_supply: number | null;
}



function InfoCard({ title, value, color }: { title: string; value: string | number; color?: string }) {
    return (
        <div className="flex flex-col justify-center items-center bg-neutral-600 rounded-lg p-4 shadow-2xl min-w-[150px] min-h-[100px]">
            <h2 className="opacity-70 text-center">{title}</h2>
            <span className={`text-xl ${color || ''} text-center overflow-hidden text-ellipsis whitespace-nowrap`}>
                {value}
            </span>
        </div>
    );
}


function CoinPrice() {
    const { coinId } = useParams();
    const safeCoinId = coinId || "";
    const { data, isLoading, error } = useGetCoinDetail(safeCoinId);

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>데이터를 가져오는 중 에러가 발생했습니다.</div>;

    if (!data) return null;

    const marketData = data.market_data as MarketData;

    return (
        <div className="flex gap-4 text-sm font-semibold h-full uppercase w-full">
            {/* 최고가와 최저가 */}
            <div className="flex flex-col bg-neutral-700 rounded-lg p-4 shadow-2xl gap-2">
                <InfoCard title="High" value={`$ ${marketData.high_24h?.usd || "N/A"}`} color="text-green-400" />
                <InfoCard title="Low" value={`$ ${marketData.low_24h?.usd || "N/A"}`} color="text-red-500" />
            </div>

            {/* 시가총액 및 완전 희석 시가총액 */}
            <div className="flex flex-col gap-2 bg-neutral-700 rounded-lg p-4 shadow-2xl">
                <InfoCard title="Market Cap" value={`$ ${marketData.market_cap?.usd || "N/A"}`} />
                <InfoCard title="Fully Diluted Market Cap" value={`$ ${marketData.fully_diluted_valuation?.usd || "N/A"}`} />
            </div>

            {/* 총 거래량 */}
            <div className="flex flex-col bg-neutral-700 rounded-lg p-4 shadow-2xl gap-2">
                <InfoCard title="Total Volume" value={`$ ${marketData.total_volume?.usd || "N/A"}`} />
            </div>

            {/* 공급 정보 */}
            <div className="flex flex-col bg-neutral-700 rounded-lg p-4 shadow-2xl gap-2">
                <InfoCard title="Circulating Supply" value={marketData.circulating_supply || "N/A"} />
                <InfoCard title="Max Supply" value={marketData.max_supply || "N/A"} />
                <InfoCard title="Total Supply" value={marketData.total_supply || "N/A"} />
            </div>
        </div>
    );
}

export default CoinPrice;
