let jmlAngkot = 10;
let angkotBeroperasi = 6;
// let noAngkot = 1;
// while (noAngkot <= angkotBeroperasi) {
//   console.log("Angkot no: " + noAngkot + " Sedang Beroperasi");
//   noAngkot++;
// }
// for (noAngkot <= angkotBeroperasi; noAngkot++) {
//   console.log("Angkot no:" + noAngkot + " Sedang Beroperasi dengan baik");
// }
// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("Angkot no: " + noAngkot + " Sedang diperbaiki");
// }

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 3) {
    console.log(`Angkot no: ${noAngkot} Sedang Beroperasi`);
  } else if (noAngkot === 14 || noAngkot === 12 || noAngkot === 3) {
    console.log(`Agkot tersebut sudah tidak ada`);
  } else {
    console.log(`Angkot no: ${noAngkot} Sedang Diperbaiki`);
  }
}
// Pengkondisian biasanya terjadi pada salah satu namun diatas pengkondisian berada didalam pengulangan

// LATIHAN
