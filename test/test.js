'use strict';
var expect = require('chai').expect;
var crypto = require('../build/index.js');
describe('price() Method', () => {

    it('Should return the price of the bitcoin', () => {
        return crypto.price('bitcoin').then(data => {
            expect(data[0].id).to.be.an('string');
            expect(data[0].available_supply).to.be.an('string');
            expect(data[0].last_updated).to.be.an('string');
            expect(data[0].market_cap_usd).to.be.an('string');
            expect(data[0].max_supply).to.be.an('string');
            expect(data[0].name).to.be.an('string');
            expect(data[0].percent_change_1h).to.be.an('string');
            expect(data[0].percent_change_24h).to.be.an('string');
            expect(data[0].percent_change_7d).to.be.an('string');
            expect(data[0].price_usd).to.be.an('string');
            expect(data[0].rank).to.be.an('string');
            expect(data[0].symbol).to.be.an('string');
            expect(data[0].total_supply).to.be.an('string');
        })
        
    });
});

describe('priceWCI() Method', () => {

    it('Should return the price of the bitcoin', () => {
        return crypto.priceWCI('bitcoin', 'YOUR-KEY-HERE').then(data => {
            expect(data[0].Label).to.be.an('string');
            expect(data[0].Name).to.be.an('string');
            expect(data[0].Price_btc).to.be.an('number');
            expect(data[0].Price_cny).to.be.an('number');
            expect(data[0].Price_eur).to.be.an('number');
            expect(data[0].Price_gbp).to.be.an('number');
            expect(data[0].Price_rur).to.be.an('number');
            expect(data[0].Price_usd).to.be.an('number');
            expect(data[0].Timestamp).to.be.an('number');
            expect(data[0].Volume_24h).to.be.an('number');
        })
        
    });
});