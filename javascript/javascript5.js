// // block scope
// var a = 1;
// function tes() {
//   var b = 2;
//   //   console.log(a);
// }
// console.log(tes(b));

// Rekursif
// for( var i =10; i>=i; i--){
//     console.log(i)
// }

function tampilAngka(n) {
  if (n === 0) {
    return;
  }
  //ini base case fungsinya untuk memberhentikan rekursif
  console.log(n);
  return tampilAngka(n - 1);
}
tampilAngka(10);
