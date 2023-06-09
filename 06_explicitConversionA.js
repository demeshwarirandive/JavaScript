//Explicit conversion : Invalid string to number return NaN

//if a string is an invalid number, the result will be NaN. 

let result;

result = Number(`hello`);
console.log(result);

result = Number(undefined);
console.log(result);

result = Number(NaN);
console.log(result);