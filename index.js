function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function named() {
        console.log(`FUNCTION`);
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`FUNCTION`);
    }
}