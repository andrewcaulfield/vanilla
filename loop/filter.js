// Filter is great apply a test function on an array and create a new array on only those items that pass the test.

function getStocksOver(stocks, minPrice) {
    return stocks.filter(function(stock) {
        return stock.price >= minPrice;
    });
}

var expensiveStocks = getStocksOver(
    [
        {symbol: "XFZ", price: 340.22, volume: 202373},
        {symbol: "ABC", price: 521.19, volume: 737323},
        {symbol: "DEF", price: 987.82, volume: 2373},
    ], 400.00);

console.log(JSON.stringify(expensiveStocks));