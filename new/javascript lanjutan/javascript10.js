// Destructuring Array
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b, a / b, a - b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);

// const [tambah, ...va] = penjumlahanPerkalian(2, 3);
// console.log(va[3]);

// Destructuring Return Value
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
  nama: "Bambang",
  umur: 21,
  motto: "Berjuang tanpa henti",
  nilai: {
    uas: 90,
    uts: 95,
    ta: 99,
  },
};
const mhs2 = {
  nama: "B",
  umur: 22,
  motto: "Cukup dengan kata janganMenyerah",
};
function cetakMhs({ nama, umur, nilai: { uas, uts, ta } }) {
  return `Halo, nama saya ${nama}, dan usia saya ${umur} tahun lalu nilai nilai saya ${ta}.`;
}
console.log(cetakMhs(mhs1));
