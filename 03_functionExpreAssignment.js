console.log(`1. write a function Epression to get square of the number Ex- 5,6,25,100`);

var square = function(num){
    result = 5*5;
    console.log("square of 5 is:", result);
}
square(5*5);

var square = function(num){
    result = 6*6;
    console.log("square of 6 is:", result);
}
square(6*6);

var square = function(num){
    result = 25*25;
    console.log("square of 25 is:", result);
}
square(25*25);

var square = function(num){
    result = 100*100;
    console.log("square of 100 is:", result);
}
square(100*100);

console.log(" ");

console.log(`2. Check and log type of function(Hint-typeOf VariableName`);

    console.log("Data type : string ");

    console.log(" ");

console.log("3. write a function expression to get the area of rectangle plot is : ");
var areaOfPlot = function(length, width){
    result = length*width;
console.log("length*breath =", result);
}
areaOfPlot(499, 917);

console.log(" ");

console.log("4. Variable name that you can use to store function is :");
 var swapValues = function swapValues(value1, value2){
    console.log("Before Swap : ", value1 , value2);
    var temp =value1;
        value1 = value2;
        value2 = temp; 
    console.log("After Swap : ",value1 , value2);
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);

console.log("");

console.log(`5. Write a function expression which can perform the below steps for string:`);
var stringHandsOn = function(){
var string ="JS the most popular language of internet."
}
stringHandsOn();

console.log(`A] Find the total character available in the string is:`);
var handsOn = "JS the most popular language of internet."
var  handsOnLength =  handsOn.length;
console.log("Total  charter available in string: ",  handsOnLength);

console.log(`B] Find the character at index 6 is:`);
var  charAtLastIndex=" JS the most popular language of internet";
var result = charAtLastIndex.charAt(6);
console.log("Char at 6 index: ",result);

console.log(`C] Find the character at index 11 is:`);
var  charAtLastIndex=" JS the most popular language of internet";
var result = charAtLastIndex.charAt(11);
console.log("Char at 11 index: ",result);

console.log(`D] Find the character using length property is:`);
var handsOn = "JS the most popular language of internet."
var resultSplit = handsOn.split("internet");
console.log(resultSplit.length);

console.log(`E]Find the very first char in given string is:`);
var  charAtLastIndex="JS the most popular language of internet";
var result = charAtLastIndex.charAt(0);
console.log("Char at 0 index: ",result);

console.log(`F] Find the character using length property is:`);
var resultSplit = handsOn.split("");
console.log("Total number of words: ",resultSplit.length)