// Array
// const mhs = ["b", "s", "d"];
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// // for..of mengulang isi array dan iterables lain
// for (const m of mhs) {
//   console.log(m);
// }

// String looping string nanti hasilnya B a m b a n g berjejer kebawah
// const nama ='Bambang'
// for( const n of nama){
//     console.log(n)
// }

// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke- ${i + 1}`));

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-`);
// }

// const liNama = document.querySelectorAll(".nama");
// // liNama.forEach((m) => console.log(m.textContent));

// // for (n of liNama) {
// //   console.log(n.innerHTML);
// // }

// // Arguments
// function jumlahkanAngka() {
//   //   return arguments.reduce((a, i) => a + i); //pasti error karena reduce bukan function dari array
//   return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in  looping properti dari object
// const mhs = {
//   nama: "Bambang",
//   umur: 21,
//   email: "kurniawanbambang@gmail.com",
// };
// for (m in mhs) {
//   console.log(mhs(m));
// }

// // Nodelist
// const liNama = document.querySelectorAll(".nama");
// console.log(liNama);
// liNama.forEach((m) => console.log(m.textContent));
// atau
// for (n of liNama) {
//   console.log(n.innerHTML);
