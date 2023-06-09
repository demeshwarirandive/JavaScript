
var greaterNumber = function(num1,num2) {
    var result = num1>num2 ? `${num1} is greater` : `${num2} is greate`;
    console.log(result);
}
greaterNumber(10,-10);
greaterNumber(800,899);
var isEvenOrOddNum = function(num) {
    var result = num%2 == 0? true : false;
    return result;
}
var result = isEvenOrOddNum(29);
var res = (result == true) ? "29 is even": "29 is odd";
console.log(`${res}`);
var result = isEvenOrOddNum(44);
var res1 = (result == true) ? "44 is even": "44 is odd";
console.log(`${res1}`);
var result = isEvenOrOddNum(0);
var res2 = (result == true) ? "0 is even": "0 is odd";
console.log(`${res2}`);
var result = isEvenOrOddNum(101);
var res3 = (result == true) ? "101 is even": "101 is odd";
console.log(`${res3}`);

var wordLength = function(word){
    var len =word.length;
    var result = len %2 == 0 ? "EVEN" : "ODD";
    return result;
}
var returnValue = wordLength("JavaScript");
console.log(`JavaScript has ${returnValue}`);

var returnValue = wordLength("Developer");
console.log(`Developer has ${returnValue}`);

var returnValue1 = wordLength("Google");
console.log(`Google has ${returnValue1}`);




