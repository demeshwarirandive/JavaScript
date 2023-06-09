function monthOfYear(monthNumber) {
    switch (monthNumber) {
      case 1:
        console.log(`Month: January as Mmonth number is ${monthNumber}`);
        break;
      case 2:
        console.log(`Month : February as Month number is ${monthNumber}`);
        break;
      case 3:
        console.log(`Month : March as Month number is ${monthNumber}`);
        break;
      case 4:
        console.log(`Month is: April as Month number is ${monthNumber}`);
        break;
      case 5:
        console.log(`Month is: May as Month number is ${monthNumber}`);
        break;
      case 6:
        console.log(`Month is: June as Month number is ${monthNumber}`);
        break;
      case 7:
        console.log(`Month is: Jully as Month number is ${monthNumber}`);
        break;
        case 8:
        console.log(`Month : August as Month number is ${monthNumber}`);
        break;
      case 9:
        console.log(`Month is: September as Month number is ${monthNumber}`);
        break;
      case 10:
        console.log(`Month is: Octomber as Month number is ${monthNumber}`);
        break;
      case 11:
        console.log(`Month is: November as Month number is ${monthNumber}`);
        break;
      case 12:
        console.log(`Month is: December as Month number is ${monthNumber}`);
        break;
      default:
        console.log(`Invalid input ==>  ${monthNumber}`);
        break;
    }
  }

  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear(null);
  monthOfYear(undefined);
