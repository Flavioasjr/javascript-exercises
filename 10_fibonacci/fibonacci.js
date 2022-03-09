const fibonacci = function(positionFibonacci) {
    if( positionFibonacci < 0 ) return 'OOPS';
    positionFibonacci = Number(positionFibonacci);
    let arrayFibonacci = [1, 1];
    for ( let i = 2; i < positionFibonacci; i++ ) {
        arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
    }
    return arrayFibonacci[arrayFibonacci.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
