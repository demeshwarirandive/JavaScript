// Undefined used with number, boolean or null given Nan

// Arithmatic operation of undefined with number, boolean or null gives NaN
let result;

result = `4` + undefined;
console.log(result);

result = `4` - undefined;
console.log(result);

result = true + undefined;
console.log(result);

result = null + undefined;
console.log(result);