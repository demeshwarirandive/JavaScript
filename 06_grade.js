function gradeCalculation(marks) {
    if (marks >= 90) {
      console.log(`Fantastic marks is : ${marks}, Your grade is A+`);
    } else {
      if (marks >= 75 && marks < 90) {
        console.log(`Excllent marks is : ${marks}, Your grade is A`);
      } else {
        if (marks >= 50 && marks < 75) {
          console.log(`Good marks is : ${marks}, Your grade is B`);
        } else {
          if (marks >= 35 && marks < 50) {
            console.log(
              `Marks is : ${marks}, Your grade is C , Need improvement`
            );
          } else {
            if (marks <= 0 || marks == "Eighty" || marks > 100) {
              console.log(`Please provide the valid marks: ${marks}`);
            } else {
              console.log(`Invalid marks: ${marks}`);
            }
          }
        }
      }
    }
  }
  
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation("91");
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation("Eighty");
  gradeCalculation(undefined);
  gradeCalculation(null);