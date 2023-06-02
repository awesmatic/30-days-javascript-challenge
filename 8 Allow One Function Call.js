var once = function (fn) {
    let functionCalled = false;
    return function (...args) {
        if (functionCalled) {
            return undefined
        } else {
            functionCalled = true
            return fn(...args)
        }

    }
};