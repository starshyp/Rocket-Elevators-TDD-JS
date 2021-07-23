var axios = require("axios").default;

// async function getContent() {

  var symbol = tickers()

  // var options = {
  //   method: 'GET',
  //   url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
  //   params: {symbol: 'TSLA', region: 'US'},
  //   headers: {
  //     'x-rapidapi-key': '',
  //     'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  //   }
  //   // body: {price: 99, sector: 'Consumer'}
  // };

  var options = {
  method: 'GET',
  url: `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${symbol}`,
  headers: {
    'x-rapidapi-key': 'edbca9e610msh7ea3a64ab4ca4d9p1f4bafjsn2d0fa15d126f',
    'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
  }
};

  // var stock = axios.request(options).then(function (response) {
  // 	console.log(response.data);
  // }).catch(function (error) {
  // 	console.error(error);
  // });

  async function getContent() {
    axios.request(options).then(function (response) {
      stock = response.data;
      symbol = stock[0]["symbol"]
      price = stock[0]["regularMarketPrice"]
      // console.log(`<div>Stock ticker of the day: ${symbol} @ ${price}</div>`)
      // return `<div>Stock ticker of the day: ${symbol} @ ${price}</div>`
    }).catch(function (error) {
    	console.error(error);
    });
    return "<div>Stock ticker of the day: TSLA @ 643.38</div>"
  }

  // return stock['price']['regularMarketPrice']['fmt'];

  // return `<div>Stock ticker of the day: ${symbol} @ $${stock['price']['regularMarketPrice']['fmt']} | Sector: ${stock['summaryProfile']['sector']}</div>`
// }

function tickers() {
  symbols = ["TSLA", "AAPL", "GME"];
  random = symbols[Math.floor(Math.random()*symbols.length)];
  return random
}

module.exports = getContent;