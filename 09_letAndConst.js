var myName = "Gajanan"; // Variable declaration and Initialization

var myName = "Gajanan Kharat"; // Re-declaration allowed

myName = "Gajanan P. Kharat";  // Update

console.log(`${myName}`);

let collegeName = "COEP";

collegeName = "COEP Pune"; //  // Re-declaration not allowed


const PI = 3.14;
// PI = 3.1412; // Update not allowed
console.log(`${PI}`);


// Scope == Accessibility 
let age = 25;
if (age ==25) {
    let city = "Pune";
    // console.log(`City ${city}`);
}
// console.log(`City ${city}`);

function show() {
    var country = "India"; 
    let age = 25;
    if (age ==25) {
        let city = "Pune";
        const PIN = 431267;
        var village = "Mulsi";
    }
    // console.log(`City ${city}`);
    // console.log(`Pin ${PIN}`);
    console.log(`Village ${village}`);

}
show();
// console.log(`Country ${country}`);