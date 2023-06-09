var countCharA = function (word){                                                                                                                                                                                                                                                                                                                                                            
var word = "I AM Learning JavaScript,The Language of internet";
//a==A
var count = 0;
 for (let index = 0; index <  word.length; index++){
 var char =  word.charAt(index);
 if (char == 'a' || char == 'A' ){
  console.log(char);     
  count++;
    }
 }
    console.log( `Count Total a, A :${count}`); 

    var word = "My favourite movie is LAggAn";
    // a e i o u == A E I O U
    var count = 0;
    for (let index = 0; index < word.length; index++) {
        var char = word.charAt(index); // 
        if (char == 'a' ||  
            char == 'A') {
            console.log(char);
            count++;
        }
        
    }
    console.log(`Count total number of characters: ${count}`);
  }
  countCharA("I AM Learning JavaScript,The Language of internet");
  