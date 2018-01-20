declare function require(name:string);
const cryptoValues = require("./crypto.json");
const coinMarketCapUrl = "http://api.coinmarketcap.com/v1/ticker/";
const worldCoinIndexURL = "https://www.worldcoinindex.com/apiservice/json?key=";

/**
 * @method getURL: fetch an api and return its body
 * @param {string} url: string with the url
 * @returns Promise with the http response
 */
const getURL = function(url: string) {
    // return new pending promise
    return new Promise((resolve, reject) => {
      // select http or https module, depending on reqested url
      const lib = url.startsWith('https') ? require('https') : require('http');
      const request = lib.get(url, (response: any) => {
        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
           reject(new Error('Failed to load page, status code: ' + response.statusCode));
        }
        // temporary data holder
        const body: Array<any> = [];
        // on every content chunk, push it to the data array
        response.on('data', (chunk: any) => body.push(chunk));
        // we are done, resolve promise with those joined chunks
        response.on('end', () => resolve(body.join('')));
      });
      // handle connection errors of the request
      request.on('error', (err: Error) => reject(err));
    }).catch((err: Error) => {
        throw err;
    });
}

/**
 * @method getCrypto: Return the crypto value from the JSON
 * @param {string} crypto: crypto to query
 * @returns string with the crypto
 */
const getCrypto = function(crypto: string): string {
    return cryptoValues[crypto.toLowerCase()] || crypto.toLocaleLowerCase();
}

/**
 * @method price: Get price from coinMarketCap
 * @param {string} crypto: crypto to query
 */
export function price(crypto: string): Promise<any> {

    return new Promise((resolve, reject) => {
        if (!crypto) reject(new Error('Coin Not Found'));

        else {
            const requestUrl = coinMarketCapUrl + "/" + getCrypto(crypto);

            getURL(requestUrl).then((data: any) => {
                if (data) resolve(JSON.parse(data));

                else reject(new Error('Coin Not Found'));
            });
        }
    });
}