const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if ( array.length === 0) return 0;
	const sumTotal = array.reduce((accumulator, value) => {
    accumulator += value;
    return accumulator;
  });
  return sumTotal;
};

const multiply = function(array) {
  if ( array.length === 0) return 0;
	const multiplyTotal = array.reduce((accumulator, value) => {
    accumulator *= value;
    return accumulator;
  });
  return multiplyTotal;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0 ) return 1;
  let accumulator = num;

  for(let i = (num - 1); i > 0; i--) {
    accumulator *= i; 
  }
  return accumulator;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
