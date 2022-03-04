const removeFromArray = function () {
    let array = Array.from(arguments[0]);
    
    for (let i = 1; i < arguments.length; i++) {
        const indexArray = array.indexOf(arguments[i]);

        if (indexArray > -1) {
            array.splice(indexArray, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
