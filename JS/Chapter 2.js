const prompt = require('prompt-sync')();

let age= prompt("What is your age? ");
// if (age>10 && age<19){
//     console.log("You are a teenager");
// }
// else{
//     console.log("You are not a teenager");
// }

// switch (age) {
//     case "10":
//         console.log("You are 10 years old");
//         break;
//     case "11":
//         console.log("You are 11 years old");
//         break;
//     case "12":
//         console.log("You are 12 years old");
//         break;
//     case "13":
//         console.log("You are 13 years old");
//         break;
//     case "14":
//         console.log("You are 14 years old");
//         break;
//     case "15":
//         console.log("You are 15 years old");
//         break;
//     case "16":
//         console.log("You are 16 years old");
//         break;
//     case "17":
//         console.log("You are 17 years old");
//         break;
//     case "18":
//         console.log("You are 18 years old");
//         break;
//     case "19":
//         console.log("You are 19 years old");
//         break;
//     default:
//         console.log("You are not a teenager");
//         break;
// }

// if ((age%2)==0 || (age%3)==0){
//     console.log("You are a teenager");
// }

(age>18) ? console.log("You can drive") : console.log("You can't drive");
