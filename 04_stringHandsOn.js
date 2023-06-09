

var stringHandsOn = "    Hey you are doing good, keep it up   ";
console.log("    Hey you are doing good, keep it up");

var handsOn = "   Hey you are doing good, keep it up    ";
var handsOnLength = handsOn.length;
console.log("Total character length is:", handsOnLength);

var trimmedhandsOn = handsOn.trim();
var lengthAfterTrim = trimmedhandsOn.length;
console.log("Length after removeing leading and trailing Space: ", trimmedhandsOn.length);
console.log("The total number of extra spaces count is : ", handsOnLength-lengthAfterTrim);

var  charAtLastIndex = "Hey you are doing good, keep it up";
var result = charAtLastIndex.charAt(0);
console.log("Char at last index: ", result);

var charAtLastIndex = "Hey you are doing good, keep it up";
var result = charAtLastIndex.charAt(charAtLastIndex.length-1);
console.log("char at last index: ", result);

var myName = "Hey you are doing good, keep it up";
console.log(myName.indexOf("good"));

var str = "Hey you are doing good, keep it up";
console.log(str.substring(22));

var str = "Hey you are doing good, keep it up";
console.log(str.slice(22));

var s = "Hey you are doing good, keep it up";
console.log(str.substring(32));

var s = "Hey you are doing good, keep it up";
console.log(s.substring(0, 3));
console.log("Length od string is: 45 ")