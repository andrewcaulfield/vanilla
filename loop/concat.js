var exchanges = [
    [
        {symbol: "XFZ", price: 340.22, volume: 202373},
        {symbol: "ABC", price: 521.19, volume: 737323}
    ],
    [
         {symbol: "DEF", price: 987.82, volume: 2373},
         {symbol: "HIJ", price: 200.82, volume: 373}

    ]
];

Array.prototype.concatAll = function() {
    var results = [];

    this.forEach(function(subArray) {
        subArray.forEach(function(item) {
            results.push(item);
        });
    });

    return results;
};

var stocks = exchanges.concatAll();

stocks.forEach(function(stock) {
    console.log(JSON.stringify(stock));
});
