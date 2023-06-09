var stringHandsOn = "  Hey you are doing good,keep it up    ";
console.log("        Hey you are doing good, keep it up    ");

var handsOn = "  Hey you are doing good, keep it up    ";
var  handsOnLength =  handsOn.length;
console.log("Total  charter Length: ",  handsOnLength);


var trimmedhandsOn = handsOn.trim();
var lengthAfterTrim = trimmedhandsOn.length;
console.log("Length after removeing leading and trailing Space: ", trimmedhandsOn.length );
console.log("The total number of extra spaces count is : ", handsOnLength-lengthAfterTrim);


var  charAtLastIndex = "Hey you are doing good, keep it up";
var result = charAtLastIndex.charAt(0);
console.log("Char at First index: ",result);


var  charAtLastIndex = "Hey you are doing good, keep it up";
var result = charAtLastIndex.charAt(charAtLastIndex.length-1);
console.log(" Char at Last index: ",result);



var searchName="  Hey you are doing good, keep it up" ;
console.log("Index Of Word in string:", searchName. search("good"));


var subStringResult = handsOn.substring(22);
console.log("Substring result is: ", subStringResult);


var sliceResult = handsOn.slice(22);
console.log("Slice Result is: ", sliceResult);
 

var sliceEnd= handsOn.slice("34");
console.log("End char is: ",sliceEnd);


var sliceStart ="Hey you are doing good, keep it up" 
console.log("Start char is:",sliceStart.substring(0,3));

console.log("Length of String is:40");