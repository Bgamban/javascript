// Destructuring Variable Assignment : Array
// const perkenalan = ["Halo", "Nama", "Saya", "Bambang"];
// const [salam, satu, dua, tiga] = perkenalan;
// Skip Item
// const [salam, , , tiga] = perkenalan;
// console.log(dua);
// //  Swap Item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // Return value pada function
// function coba() {
//   return [1, 2];
// }
// const a = coba();
// console.log(a);
// // Tapi dengan cara destructuring variable ini:
// const [a, b] = coba;

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values[2]);

// // Desructuring Object
// const mhs = {
//   nama: "Bambang",
//   umur: 21,
// };
// const { nama, umur } = mhs; //namanya harus sesuai dengan nama properti diatas
// console.log(nama);

// Assignment tanpa deklarasi Object
// ({ nama, umur } = { nama: "Bambang", umur: 21 }); //kalo begini jangan lupa pake kurung()
// console.log();

// Assign ke Variable baru
// const mhs = {
//   nama: "Bambang",
//   umur: 21,
// };
// const { nama: n, umur: u } = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
//       nama: "Bambang",
//       umur: 21,
//     };
//     const { nama, umur, email = 'email@default.com' } = mhs;
//     console.log(email);

// Memberi nilai default + assign ke variable baru
// const mhs = {
//   nama: "Bambang",
//   umur: 21,
// };
// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// const mhs = {
//     nama: "Bambang",
//     umur: 21,
//   };
//   const { nama, ...values } = mhs;
//   console.log(values);

//   Mengambil field pada Object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Bambang",
  umur: 21,
};
function getIdmhs(mhs) {
  return mhs.id;
}
console.log(getIdmhs(mhs));
