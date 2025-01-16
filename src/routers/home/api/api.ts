

export async function  getCoinAPi(){
    const coinDataKey = import.meta.env.VITE_COIN_DATA;
    const response = await fetch(`${coinDataKey}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`);
    return await response.json();
}