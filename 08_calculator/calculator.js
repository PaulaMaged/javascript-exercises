const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayOfInts) {
	return arrayOfInts.reduce((total, member) => {
    return total + member;
  }, 0)
};

const multiply = function(arrayOfInts) {
  if(!arrayOfInts.length) return -1;
  return arrayOfInts.reduce((total, member) => {
    return total * member;
  }, 1)
};

const power = function(base, exponent) {
	// return base**exponent;
  if(exponent == 1) return base;
  if(exponent == 0) return 1;
  const arrayOfBase = [];
  while(exponent > 0){
    arrayOfBase.push(base);
    exponent--;
  }
  return multiply(arrayOfBase);
};

const factorial = function(number) {
	if(!number) return 1;
  let factorial = 1;
  while(number > 1){
    factorial *= number;
    number--;
  }
  return factorial;
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
