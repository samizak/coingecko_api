import axios from "axios";

const GetIncludePlatformURL = (include_market_cap?: boolean) =>
    include_market_cap ? `?include_platform=${include_market_cap}` : '';

export async function GetCoinList (include_platform?: boolean){
    const include_platform_URL = GetIncludePlatformURL(include_platform);
    const url = `https://api.coingecko.com/api/v3/coins/list${include_platform_URL}`;

    return await axios
        .get(url)
        .then(response => response.data)
}



export async function GetCoinData (id: string){
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;

    return await axios
        .get(url)
        .then(response => response.data)
}