import axios from "axios";

export async function Ping(){
    return await axios
        .get('https://api.coingecko.com/api/v3/ping')
        .then(response => response.data)
}