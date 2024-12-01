
export async function  getCoinAPi(){
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`);
    const json = await response.json();
    return json;
}