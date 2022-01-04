export declare class coingecko {
    static Ping(): Promise<any>;
    static GetVsCurrencies(): Promise<any>;
    static GetPrice(IDs: string, vs_currencies: string, include_market_cap?: boolean, include_24hr_vol?: boolean, include_24hr_change?: boolean, include_last_updated_at?: boolean): Promise<any>;
    static GetCoinList(include_platform?: boolean): Promise<any>;
    static GetCoinData(id: string): Promise<any>;
}
