// (function () {
//   console.log("IIFE akan langsung dieksekusi");
// })();

// const tampilNama = function (nama) {
//   return `Halo ${nama}`;
// };
// console.log(tampilNama(`Bambang`));
// ubah menjadi arrow function:
// const tampilNama = nama => `Halo ${nama}`;  //ini disebutnya implisist return karena object, return, parameter.
// console.log(tampilNama(`Parsa`))

let mahasiswa = ["B", "T", "W"];
let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});
console.log(jumlahHuruf);

// versi arrow function:
// let jumlahHuruf = mahasiswa.map (nama => nama.length)
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);
