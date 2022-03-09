const findTheOldest = function(peoples) {
    let currentTime = new Date();
    let year = Number(currentTime.getFullYear());

    for(let value of peoples) {
        if (!value.yearOfDeath) value.yearOfDeath = year;
    }
    console.log(peoples);
    const people = peoples.reduce((accumulator, value, index) => {
        if((accumulator.yearOfDeath - accumulator.yearOfBirth) >= 
            (value.yearOfDeath - value.yearOfBirth) ) return accumulator;
        return value;
    });
    if ( people.yearOfDeath === 2022) delete people.yearOfDeath;

    return people;
};

// Do not edit below this line
module.exports = findTheOldest;
