/**
 * @method price: Get price from coinMarketCap
 * @param {string} crypto: crypto to query
 * @returns A promise with the prices of this coin
 */
export declare function price(crypto: string): Promise<Array<Price>>;
/**
 * @method priceWCI: Get price from worldCoinIndex
 * @param {string} crypto: crypto to query
 * @param {string} key: worldCoinIndex API key
 * @returns A promise with the prices of this coin
 */
export declare function priceWCI(crypto: string, key?: string): Promise<Array<PriceWCI>>;
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
export interface PriceWCI {
    Label: string;
    Name: string;
    Price_btc: number;
    Price_usd: number;
    Price_cny: number;
    Price_eur: number;
    Price_gbp: number;
    Price_rur: number;
    Volume_24h: number;
    Timestamp: number;
}
