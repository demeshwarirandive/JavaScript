// 5! = 5 * 4 * 3 * 2 * 1
let factorial = 1; // 120
for (let index = 5; index >= 1; index--) { // index = 5  4  3  2  1  0
    factorial = factorial * index; // 120 * 1 
}
console.log(`Factorial ${factorial}`);