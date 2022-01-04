import axios from "axios";


const GetMarketCapURL = (include_market_cap?: boolean) =>
    include_market_cap ? `&include_market_cap=${include_market_cap}` : '';

const Get24hrVolURL = (include_24hr_vol?: boolean) =>
    include_24hr_vol ? `&include_24hr_vol=${include_24hr_vol}` : '';

const Get24hrChangeURL = (include_24hr_change?: boolean) =>
    include_24hr_change ? `&include_24hr_change=${include_24hr_change}` : '';

const GetLastUpdatedURL = (include_last_updated_at?: boolean) =>
    include_last_updated_at ? `&include_last_updated_at=${include_last_updated_at}` : ''

const Optional_URL = (include_market_cap?: boolean, include_24hr_vol?: boolean, include_24hr_change?: boolean, include_last_updated_at?: boolean) =>
    GetMarketCapURL(include_market_cap) 
    + Get24hrVolURL(include_24hr_vol) 
    + Get24hrChangeURL(include_24hr_change) 
    + GetLastUpdatedURL(include_last_updated_at);


export async function Get_price(IDs: string, vs_currencies: string, include_market_cap?: boolean, include_24hr_vol?: boolean, include_24hr_change?: boolean, include_last_updated_at?: boolean){

    const IDs_url = IDs.split(',').map(id => id.trim());
    const vs_currencies_url = vs_currencies.split(',').map(id => id.trim());
    const optional_urls = Optional_URL(include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at);
    
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${IDs_url}&vs_currencies=${vs_currencies_url}${optional_urls}`;

    return await axios
        .get(url)
        .then(response => response.data)
}

export async function Get_vs_currencies(){
    return await axios
        .get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
        .then(response => response.data)
}

