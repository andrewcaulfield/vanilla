var stocks =
    [
        {symbol: "XFZ", price: 340.22, volume: 202373},
        {symbol: "ABC", price: 521.19, volume: 737323},
        {symbol: "DEF", price: 987.82, volume: 2373},
    ];

    var filteredStockSymbols =
        stocks.
            filter(function(stock) {
                return stock.price >= 400.00
            }).
            map(function(stock) {
                return stock.symbol;
            });

filteredStockSymbols.forEach(function(symbol) {
    console.log(symbol);
})