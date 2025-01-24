// // Higher Order Function

// let total = 0, count = 1;
// while (count <=10 ){
//     total +=count;
//     count +=1;
// }
// console.log(total);
// ///////VS/////////
// console.log(sum(range(1,10)));

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
/////////VS/////////
// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// repeatLog(10);

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(function (num) {
//   return num * 2;
// });
// console.log(doubled);

function createMultiplier(multiplier) {
  return function (win) {
    return win * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5));
const triple = createMultiplier(3);
console.log(triple(5));
