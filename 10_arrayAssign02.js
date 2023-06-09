

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Array is : ${arrayNumbers}`);

// find total element available or length.
var  arrayNumbersLength = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var arrayNumbersLength = arrayNumbersLength.length;
console.log(`Array Length is : ${arrayNumbersLength}`);

//the 1st and last element in arrayNmubers.
const firstIndexValue = arrayNumbers[0];
console.log(`First element value: ${firstIndexValue}`);
let arrayLength = arrayNumbers.length;
const lastIndexValue = arrayNumbers[arrayNumbersLength-1];
console.log(`Last element value: ${lastIndexValue}`);

//third last element using length property
const thirdElementValue = arrayNumbers.length;
const lastThirdElementValue = arrayNumbers[arrayLength-3];
console.log(`Third last element value: ${lastThirdElementValue}`);

// the all even numbers using for in loop 
console.log(`This is Even Number:`);
 const arrayNumbersEven = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of arrayNumbersEven) {
     if (element%2==0)
     console.log(element);
 }

 // the all odd number using for in loop
 
 console.log(`This is Odd Number:`);
 const arrayNumbersOdd = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of arrayNumbersOdd) {
     if (element%2)
     console.log(element);
 }

 //all the even positioned element from arrayNumbers
 console.log(`This is Even Positioned Element`);
 
 const arrayNumbersEvenP = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const index in arrayNumbersEvenP) {
    if (index%2==0)
    console.log(`${arrayNumbersEvenP [index]}`);
}
const array1 =  [ 20,40,23,29,60,11];
var sum=0;
for (let index = 0; index <array1.length ; index++) {
    sum += array1[index];
}
console.log(`Sum of Even Positioned Element:${sum}`);

//all the odd positioned element from arrayNumbers
console.log(`This is Odd Positioned Element`);
const arrayNumbersOddP = [ 20,31,40,25,23,11,29,9,60,2,11 ];
for (const index in arrayNumbersOddP) {
   if (index%2)
   console.log(`${arrayNumbersOddP [index]}`);
}

const arr =  [ 31,25,11,9,2];
var sum=0;
for (let index = 0; index <arr.length ; index++) {
    sum += arr[index];
}
console.log(`Sum of Odd Positioned Element:${sum}`);


//Sum Of ALL Element from arrayNumbers
const array =  [ 20,31,40,25,23,11,29,9,60,2,11 ];
var sum =0;

for (let index = 0; index < array.length; index++) {
     sum += array[index];
}
 console.log(`Sum of Total element : ${sum}`);

 //find the number which are multiple of 5.
 
 console.log(`Multiple of 5 is: `);
 const num = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of num) {
     if (element%5==0)
     console.log(element);
 }
 console.log(`Number 115 is available..`);
 console.log(`false`);
 const arrayNumbers0 = [ 20,31,40,25,23,11,29,9,60,2,11 ];
  arrayNumbers0.includes(115);

 console.log(`Number 23 is available..`);
 console.log(`true`);
 const arrayNumbersS = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 arrayNumbersS.includes(23);


console.log(``);
var arrayNumbers1 = [ 20,31,40,25,23,11,29,9,60,2,11 ];
console.log(arrayNumbers1);
arrayNumbers1.splice(3,0, 55,66)
console.log(arrayNumbers1);


console.log(``);
var arrayNumbers2 = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 var slice = arrayNumbers2.slice(4)
 console.log(arrayNumbers2);
var arrayNumbers3= [ 20,31,40,25,23,11,29,9,60,2,11 ];
const arraySpliced = arrayNumbers3.splice(0,5);
console.log(arrayNumbers3);