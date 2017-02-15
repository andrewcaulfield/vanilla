function getStockSymbols(stocks) {
    var results = stocks.map(function(stock) {
        return stock.symbol;
    });

    console.log(results);
}

var symbols = getStockSymbols([
    {symbol: "XFZ", price: 340.22, volume: 202373},
    {symbol: "ABC", price: 521.19, volume: 73732373},
    {symbol: "DEF", price: 987.82, volume: 2373},
])