// Explicit conversion: Convert number strings and boolean values to numbers, in that case we can use Number();

// string to number
result = Number(`324`);
console.log(result);

result = Number(`324e-1`);
console.log(result);

//boolean to number
result = Number(true);
console.log(result);

result = Number(false);
console.log(result);