function voteEligibility(age){
    if (age==null || age==undefined ) {
       console.log(`Age: ${age}, Invalid data ` ); 
    } else {
       if ( age >120 || age <1) {
          console.log(`Age: ${age}, Invalid data ` ); 
       } else {
            if ( age >120 || age < 1) {
                console.log(`Age :  ${age} Valid data  ` ); 
            } else { 
                    if (age >18 || age<1) {
                        console.log(`You are  eligible for voting. Your age is : ${age}  `);
                    } else {
                        console.log(`You are Not eligible for voting. Your age is : ${age} `);
                    }
                 
            }
       }  
    }
}
voteEligibility(45);
voteEligibility(17);

voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);





