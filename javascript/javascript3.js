// for (var i = 0; i < 5; i++) {
//   console.log("*");
// }

// var s = "";
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 5; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// var index = "";
// for (var js = 10; js > 0; js--) {
//   for (var css = 0; css < js; css++) {
//     index += "*";
//   }
//   index += "\n";
//   for (var js = 10; js === 0; js++) {
//     for (var css = 10; css === 0; css++) {
//       index += "\n";
//     }
//     index += "*";
//   }
// }
// console.log(index);

function buatPiramida(baris) {
  for (let i = 1; i <= baris; i++) {
    let spasi = " ".repeat(baris - i);
    let bintang = "*".repeat(2 * i - 1);
    console.log(spasi + bintang);
  }
}
buatPiramida(5);
