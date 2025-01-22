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

export async function getCoinOhlc(coinId: string, days:number) {
    const coinDataKey = import.meta.env.VITE_COIN_DATA;
    if (!coinId) {
        throw new Error("coinId is required");
    }

    return await fetch(`${coinDataKey}/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`).then(res => res.json());
}