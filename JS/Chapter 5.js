const prompt = require("prompt-sync")();
// const arry = [];
// let num = parseInt(prompt("Enter a number: "));
// while(true){
//     arry.push(num);
//     if(num == 0){
//         break;
//     }
//     else{
//         num = parseInt(prompt("Enter a number: "));
//     }
// }
// console.log(arry);
const arry = [30, 40, 23, 67, 678, 345, 10, 0];
// let f = arry.filter((x) => {
//   return x%10==0;
// });
// console.log(f);
let f = arry.map((y) => {
    return Math.pow(y, 2);
});
console.log(f);

const arr = [1, 2, 5];
const n = 4;

const factorial = arr.reduce((acc, curr) => {
    if (curr <= n) {
        return acc * curr;
    }
    return acc;
}, 1);

console.clear(factorial);
