var curry = (fn) => {
    return curried = (...args) => {
        if (args.length === fn.length) {
            return fn(...args)
        } else {
            return (...newArgs) => curried(...args, ...newArgs)

        }
    };
};