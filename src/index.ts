import * as request from 'request';
const cryptoValues = require("./crypto.json");
const coinMarketCapUrl = "https://api.coinmarketcap.com/v1/ticker/";
const worldCoinIndexURL = "https://www.worldcoinindex.com/apiservice/json?key=";

/**
 * @method getCrypto: Return the crypto value from the JSON
 * @param {string} crypto: crypto to query
 * @returns string with the crypto
 */
const getCrypto = function(crypto: string) {
    return cryptoValues[crypto.toLowerCase()] || crypto.toLowerCase();
}

/**
 * @method price: Get price from coinMarketCap
 * @param {string} crypto: crypto to query
 */
export function price(crypto: string): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!crypto) reject(new Error('Coin Not Found'));

        else {
            let url = coinMarketCapUrl + getCrypto(crypto);
            request(url, (error, res, body) => {
                if (!error && res.statusCode === 200) resolve(JSON.parse(body));
                else reject(new Error('Coin Not Found'));
            });
        }
    });
}

export function priceWCI(crypto, key): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!crypto) reject(new Error('Coin Not Found'));
        else if (!key) reject(new Error('Key Not Provided'));
        
        else {
            const cryptoId = getCrypto(crypto);
            const requestUrl = worldCoinIndexURL + key;
            request(requestUrl, (error, res, body) => {
                if (!error && res.statusCode === 200) {
                    const response = JSON.parse(body);
                    var filteredJson = response.Markets.filter((cryptoValue) => {
                        return cryptoValue.Name.toLowerCase() === cryptoId;
                    });
                    resolve(filteredJson);
                }
                else reject(new Error('Coin Not Found'));
            });
        }
    });
}

price('btc').then(data => {
    console.log(data);
})

/**
 * INTERFACES
 */

export interface Price {
    id: string;
    name: string;
    symbol: string;
    rank: string;
    price_usd: string;
    '24h_volume_usd': string;
    market_cap_usd: string;
    available_supply: string;
    total_supply: string;
    max_supply: string;
    percent_change_1h: string;
    percent_change_24h: string;
    percent_change_7d: string;
    last_updated: string;

}