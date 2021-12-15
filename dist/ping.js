"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
const axios_1 = __importDefault(require("axios"));
async function Ping() {
    return await axios_1.default
        .get('https://api.coingecko.com/api/v3/ping')
        .then(response => response.data);
}
exports.Ping = Ping;
