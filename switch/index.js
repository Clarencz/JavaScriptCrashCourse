// let day = "pizza";
// switch (day) {
//   case 1:
//     console.log(`it is Monday`);
//     break;
//   case 2:
//     console.log(`it is Tuesday`);
//     break;
//   case 3:
//     console.log(`it is Wednesday`);
//     break;
//   case 4:
//     console.log(`it is Thursday`);
//     break;
//   case 5:
//     console.log(`it is Friday`);
//     break;
//   case 6:
//     console.log(`it is Saturday`);
//     break;
//   case 7:
//     console.log(`it is Sunday`);
//     break;
//   default:
//     console.log(`${day} is not a day`);
// }

let testMarks = 92;
let letterGrade;
switch (true) {
  case testMarks >= 90:
    letterGrade = "A";
    break;
  case testMarks >= 80:
    letterGrade = "B";
    break;
  case testMarks >= 70:
    letterGrade = "C";
    break;
  case testMarks >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}
console.log(letterGrade);
