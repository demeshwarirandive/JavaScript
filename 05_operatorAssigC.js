

var tcsInterview  = function (gradScore, hscScore , sscScore, candidateName){

    var result = gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrates ${candidateName} you are eligible for TCS interview` : `Unfortunately ${candidateName} you are Not eligible for interview`;
    console.log(`${result}`);
    console.log(``);
    }
    tcsInterview(80,86,90, "Vaishnavi");
    tcsInterview(70,65,55,"Ankita");
    tcsInterview(60,79,88,"Harshada");
    