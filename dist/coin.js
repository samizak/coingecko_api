"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoinList = void 0;
const axios_1 = __importDefault(require("axios"));
const GetIncludePlatformURL = (include_market_cap) => include_market_cap ? `?include_platform=${include_market_cap}` : '';
async function GetCoinList(include_platform) {
    const include_platform_URL = GetIncludePlatformURL(include_platform);
    const url = `https://api.coingecko.com/api/v3/coins/list${include_platform_URL}`;
    return await axios_1.default
        .get(url)
        .then(response => response.data);
}
exports.GetCoinList = GetCoinList;
