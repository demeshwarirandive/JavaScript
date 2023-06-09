var checkLeapYear = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = 2020;
    if ((2020 == leapYear % 4) && (2020 != leapYear % 100) || (2020 == leapYear % 400)) {
       console.log(`This is Not leap Year: ${leapYear}`);
    } else 
    {
        console.log(`This is  Leap Year:${leapYear}`);
    }
}
checkLeapYear(2020);

var checkLeapYear1 = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = 1600;
    if ((1600 == leapYear % 4) && (1600 != leapYear % 100) || (1600 == leapYear % 400)) {
       console.log(`This is Not leap Year: ${leapYear}`);
    } else 
    {
        console.log(`This is  Leap Year:${leapYear}`);
    }
}
checkLeapYear1(1600);

var checkLeapYear2 = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = 2022;
    if ((2022 == leapYear % 4) && (2022 != leapYear % 100) || (2022 == leapYear % 400)) {
       console.log(`This is leap Year: ${leapYear}`);
    } else 
    {
        console.log(`This is Not Leap Year:${leapYear}`);
    }
}
checkLeapYear2(2022);

var checkLeapYear3 = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = 1945;
    if ((1945 == leapYear % 4) && (1945 != leapYear % 100) || (1945 == leapYear % 400)) {
       console.log(`This is leap Year: ${leapYear}`);
    } else 
    {
        console.log(`This is Not Leap Year:${leapYear}`);
    }
}
checkLeapYear3(1945);
var checkLeapYear4= function(leapYear){

    //three conditions to find out the leap year
     var leapYear = 1750;
    if ((1750 == leapYear % 4) && (1750 != leapYear % 100) || (1750 == leapYear % 400)) {
       console.log(`This is leap Year: ${leapYear}`);
    } else 
    {
        console.log(`This is Not Leap Year:${leapYear}`);
    }
}
checkLeapYear4(1750);

var checkLeapYear5 = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = null;
    if (( null == leapYear % 4)&& (null !== leapYear % 100) || (null == leapYear % 400)) {
       console.log(`valid input: ${leapYear}`);
    } else 
    {
        console.log(`Please enter the valid input: ${leapYear}`);
    }
}
checkLeapYear5();
var checkLeapYear6 = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = undefined;
    if ((undefined == leapYear % 4)&& ( undefined !== leapYear % 100) || (undefined == leapYear % 400)) {
       console.log(`valid input: ${leapYear}`);
    } else 
    {
        console.log(`Please enter the valid input: ${leapYear}`);
    }
}
checkLeapYear6();
var checkLeapYear7 = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = "Twenty Twenty";
    if( ("Twenty Twenty" == leapYear % 4)&& ("Twenty Twenty" !== leapYear % 100) || ( "Twenty Twenty" == leapYear % 400)) {
       console.log(`valid input: ${leapYear}`);
    } else 
    {
        console.log(`Please enter the valid input: ${leapYear}`);
    }
}
checkLeapYear7();
var checkLeapYear8 = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = "NaN";
    if (( NaN == leapYear % 4)&& (NaN  !== leapYear % 100) || (NaN == leapYear % 400)) {
       console.log(`valid input: ${leapYear}`);
    } else 
    {
        console.log(`Please enter the valid input: ${leapYear}`);
    }
}
checkLeapYear8();

