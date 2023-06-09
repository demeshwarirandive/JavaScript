// adding length count
var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`Array of Fruits is:${ arrayFruits}`);

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
var arrayFruitsLengthArray = ["Banana","Orange","Apple","Mango","Water Melon"];
var arrayFruitsLengthArray =  arrayFruitsLengthArray.length;
console.log(`Length of array is : ${arrayFruitsLengthArray }`);

console.log(`The first Element is:Banana`);
console.log(`The Last Element is:Water Melon`);


// Before adding the element
var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits.unshift("Papaya");
console.log(arrayFruits);



// removing element
var arrayFruits = ["Banana","Orange","Apple","Water Melon","Mango"]
arrayFruits.pop();
console.log( arrayFruits);

// add element in last number
var  arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits[ arrayFruits.length] = "Pineapple";
console.log(arrayFruits);

var arrayFruits = ["Banana", "Orange", "Apple","Mango", "water Melon"];
arrayFruits.splice(4, 0, "Dragon Fruits");
console.log(arrayFruits);

var arrayFruits = ["Banana", "Orange", "Apple","Mango", "water Melon"];
arrayFruits[1] = "kiwi";
console.log(arrayFruits);

var arrayFruits = ["Banana", "Orange", "Apple","Mango", "water Melon"];
arrayFruits.splice(0, 2);
const lastElement = arrayFruits[arrayFruits.length-1];
// console.log(fruits.length);
console.log(arrayFruits);