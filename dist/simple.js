"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get_vs_currencies = exports.Get_price = void 0;
const axios_1 = __importDefault(require("axios"));
const GetMarketCapURL = (include_market_cap) => include_market_cap ? `&include_market_cap=${include_market_cap}` : '';
const Get24hrVolURL = (include_24hr_vol) => include_24hr_vol ? `&include_24hr_vol=${include_24hr_vol}` : '';
const Get24hrChangeURL = (include_24hr_change) => include_24hr_change ? `&include_24hr_change=${include_24hr_change}` : '';
const GetLastUpdatedURL = (include_last_updated_at) => include_last_updated_at ? `&include_last_updated_at=${include_last_updated_at}` : '';
const Optional_URL = (include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at) => GetMarketCapURL(include_market_cap)
    + Get24hrVolURL(include_24hr_vol)
    + Get24hrChangeURL(include_24hr_change)
    + GetLastUpdatedURL(include_last_updated_at);
async function Get_price(IDs, vs_currencies, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at) {
    const IDs_url = IDs.split(',').map(id => id.trim());
    const vs_currencies_url = vs_currencies.split(',').map(id => id.trim());
    const optional_urls = Optional_URL(include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at);
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${IDs_url}&vs_currencies=${vs_currencies_url}${optional_urls}`;
    return await axios_1.default
        .get(url)
        .then(response => response.data);
}
exports.Get_price = Get_price;
async function Get_vs_currencies() {
    return await axios_1.default
        .get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
        .then(response => response.data);
}
exports.Get_vs_currencies = Get_vs_currencies;
