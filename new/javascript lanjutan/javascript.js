//object literal

// let mhs = {
//   nama: "Bambang",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Konichiwa ${this.nama}, selamat makan`);
//   },
// };
// let mhs2 = {
//   nama: "Bams",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Konichiwa ${this.nama}, selamat makan`);
//   },
// };

//function declaration
// function mhs(nama, energi) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.energi = energi;
//   mhs.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Konichiwa ${nama} Selamat Makan`);
//   };
//   mhs.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Konichiwa ${this.nama} Jangan Main Terus, Belajar sana!`);
//   };
//   return mhs;
// }
// let bambang = mhs("Bambang", 20);
// let nora = mhs("Nora", 19);

//function declaration yang lebih efektif
// let methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Konichiwa ${this.nama} Selamat Makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Konichiwa ${this.nama} Jangan Main Terus, Belajar sana!`);
//   },
//   tidur: function (jam) {
//     this.energi *= jam;
//     console.log(`jangan tidur terus ${this.nama} belajar sana!`);
//   },
// };
// function mhs(nama, energi) {
//   let mhs = Object.create(methodMahasiswa);
//   mhs.nama = nama;
//   mhs.energi = energi;
//   // mhs.makan = methodMahasiswa.makan;
//   // mhs.main = methodMahasiswa.main;
//   // mhs.tidur = methodMahasiswa.tidur;
//   // yang lebih efektif daripada 3 ini ganti let mhs = {}; menjadi let mhs = Object.create(methodMahasiswa);
//   return mhs;
// }
// let bambang = mhs("Bambang", 20);
// let nora = mhs("Nora", 19);
//constructor function

// function Mhs(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Konichiwa ${nama} Selamat Makan`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Konichiwa ${this.nama} Jangan Main Terus, Belajar sana!`);
//   };
// }
// let bambang = new Mhs("Bambang", 13);
// KESIMPULAN CONSTRUCTOR FUNCTION DIBALIK LAYAR MEMBUAT LET this = object.create(Mhs.prototype); dan return Mhs

//object create versi:object prototypele enheritance
// function Mahasiswa(nama, energi, nugas) {
//   this.nama = nama;
//   this.energi = energi;
//   this.nugas = nugas;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama} selamat makan`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Jangan main ${this.nama} Belajar sana!`;
// };
// Mahasiswa.prototype.mengerjakan = function (tugas) {
//   this.nugas -= tugas;
//   return `gambare ${this.nama} lanjut terus`;
// };
// let bambang = new Mahasiswa("Bambang", 10, 20);

// object create versi class
// class Mahasiswa {
//   constructor(nama, energi, nugas) {
//     this.nama = nama;
//     this.energi = energi;
//     this.nugas = nugas;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama} selamat makan`;
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `Jangan main ${this.nama} Belajar sana!`;
//   }
//   mengerjakan(tugas) {
//     this.nugas -= tugas;
//     return `gambare ${this.nama} lanjut terus`;
//   }
// }
// let bambang = new Mahasiswa("Bambang", 30, 10);
// let d = new Mahasiswa("D", 10, 29);

// //
// let me = [];
// let me = new Array{};
// function Array(){
//   let this = Object.create(Array.prototype);
// }
