const removeFromArray = function () {
    let array = Array.from(arguments[0]);
    // console.log(array);
    let newArray = [];
    let check = false;

    for (let index = 0; index < array.length; index++) {
        for (let i = 1; i < arguments.length; i++) {
            if (array[index] === arguments[i]) {
                array.splice(index, 1);
                index--;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
