export async function getCoinDetail(coinId: string){
    const coinDataKey = import.meta.env.VITE_COIN_DATA;
    if (!coinId) {
        throw new Error("coinId is required");
    }
    const response = await fetch(
        `${coinDataKey}/coins/${coinId}?localization=false`
    );
    return await response.json();
}