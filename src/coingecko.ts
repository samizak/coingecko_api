import { Ping } from './ping';
import { Get_vs_currencies, Get_price } from './simple';
import { GetCoinList } from './coin';

export class coingecko {

    public static async Ping (){
        return await Ping();
    }

    public static async GetVsCurrencies (){
        return await Get_vs_currencies();
    }

    public static async GetPrice (IDs: string, vs_currencies: string, include_market_cap?: boolean, include_24hr_vol?: boolean, include_24hr_change?: boolean, include_last_updated_at?: boolean){
        return await Get_price(IDs, vs_currencies, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at);
    }

    public static async GetCoinList (include_platform?: boolean){
        return await GetCoinList(include_platform);
    }
}