"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var cryptoValues = require("./crypto.json");
var coinMarketCapUrl = "https://api.coinmarketcap.com/v1/ticker/";
var worldCoinIndexURL = "https://www.worldcoinindex.com/apiservice/json?key=";
/**
 * @method getCrypto: Return the crypto value from the JSON
 * @param {string} crypto: crypto to query
 * @returns string with the crypto
 */
var getCrypto = function (crypto) {
    return cryptoValues[crypto.toLowerCase()] || crypto.toLowerCase();
};
/**
 * @method price: Get price from coinMarketCap
 * @param {string} crypto: crypto to query
 * @returns A promise with the prices of this coin
 */
function price(crypto) {
    return new Promise(function (resolve, reject) {
        if (!crypto)
            reject(new Error('Coin Not Found'));
        else {
            var url = coinMarketCapUrl + getCrypto(crypto);
            request(url, function (error, res, body) {
                if (!error && res.statusCode === 200)
                    resolve(JSON.parse(body));
                else
                    reject(new Error('Coin Not Found'));
            });
        }
    });
}
exports.price = price;
/**
 * @method priceWCI: Get price from worldCoinIndex
 * @param {string} crypto: crypto to query
 * @param {string} key: worldCoinIndex API key
 * @returns A promise with the prices of this coin
 */
function priceWCI(crypto, key) {
    return new Promise(function (resolve, reject) {
        if (!crypto)
            reject(new Error('Coin Not Found'));
        else if (!key)
            reject(new Error('Key Not Provided'));
        else {
            var cryptoId_1 = getCrypto(crypto);
            var requestUrl = worldCoinIndexURL + key;
            request(requestUrl, function (error, res, body) {
                if (!error && res.statusCode === 200) {
                    var response = JSON.parse(body);
                    var filteredJson = response.Markets.filter(function (cryptoValue) {
                        return cryptoValue.Name.toLowerCase() === cryptoId_1;
                    });
                    resolve(filteredJson);
                }
                else
                    reject(new Error('Coin Not Found'));
            });
        }
    });
}
exports.priceWCI = priceWCI;
