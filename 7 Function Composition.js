var compose = function (functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
        }
        return x
    }
};

var compose = function (functions) {
    return x => functions.reduceRight((acc, fn) => acc = fn(acc), x)
}