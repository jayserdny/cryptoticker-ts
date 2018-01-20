# Crypto Ticker 
This NPM module is able to get the price of certains cryptocurrency from the following websites:

- https://coinmarketcap.com/
- https://www.worldcoinindex.com

This project was originally created by [codingdefined](https://github.com/codingdefined/cryptoticker) and I decided to make a strongly typed version of his library.

## How To Install?
To install this dependence, you only need to run the following command in your command line:

```sh
npm i cryptoticker-ts --save
```

## Examples
### Javascript
```javascript
var crypto = require('cryptoticker-ts');
crypto.getPrice('bitcoin').then(data => {
    console.log(data)
});
```
```sh
Output should be an array with the prices
```
### TypeScript
```typescript
import * as crypto from 'cryptoticker-ts';
crypto.getPrice('bitcoin').then(data => {
    console.log(data)
});
```
```sh
Output should be an array with the prices
```
### AMD
```javascript
define(function(require,exports,module) {
  var crypto = require('cryptoticker-ts');
});
```

## How To Contribute?
To contribute to this library, fork the repo, make your changes, run the npm test command and if it pass, make a PR (Pull Request)
