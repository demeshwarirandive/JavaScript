console.log(`step 1: `);
var maleMarriageEligibility = function (gender, age , boyName){

var result = age>=21 ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are Not eligible for marriage`;
console.log(`${result}`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log(``);

console.log(`step 2: `);
var femaleMarriageEligibility = function (gender, age , girlName){

var result = age>=18 ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are Not eligible for marriage`;
console.log(`${result}`);
}
maleMarriageEligibility("feMale", 16, "Jenifer");
maleMarriageEligibility("feMale", 27, "Malinda Gates");
