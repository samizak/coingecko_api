"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coingecko = void 0;
const ping_1 = require("./ping");
const simple_1 = require("./simple");
const coin_1 = require("./coin");
class coingecko {
    static async Ping() {
        return await (0, ping_1.Ping)();
    }
    static async GetVsCurrencies() {
        return await (0, simple_1.Get_vs_currencies)();
    }
    static async GetPrice(IDs, vs_currencies, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at) {
        return await (0, simple_1.Get_price)(IDs, vs_currencies, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at);
    }
    static async GetCoinList(include_platform) {
        return await (0, coin_1.GetCoinList)(include_platform);
    }
}
exports.coingecko = coingecko;
