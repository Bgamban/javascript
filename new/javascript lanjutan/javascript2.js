// // Execution Context Hoisting & Scope
// // 2 fase pada Execution Context yaitu: Creation dan Execution
// // console.log(nama);
// // var nama = "B";

// // Creation phase pada Global Context
// // console.log(sayHello());
// var nama = "B";
// var age = 21;
// function sayHello() {
//   console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.age}`);
// }

// var nama = "Bambang";
// var username = '@sandhikagalih';
// function cetakURL(username){
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL = username;
// }
// console.log(cetakURL( Bmbg ))     //Bmbg akan SCOPE karena masuk ke arguments jika parameter dan variabel username tidak ada

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

function satu() {
  //function akan dihoisting/dilewat terlebih dahulu
  var nama = "Bambang"; //lalu dihoisting, jika tidak ada variabel tidak akan dihoisting
  console.log(nama); //cetak = Bambang
}
function dua() {
  //"Doddy" masuk arguments jadi diabaikan
  console.log(nama); //nama mengecek local dan argument lalu mencari di global maka = Edward
}
console.log(nama); //console.log dulu sebelum var akan membuat = undefined
var nama = "Edward"; //karena tidak ada console.log jadi akan disave di komp saja
satu(); //akan menuju function dan mencetak "Bambang"
dua("Doddy"); //karena function dua tidak menangkap parameter Doddy maka akan masuk arguments index [0]
console.log(nama); //ini scope, console.log nama akan mengambil dari global = Edward
// KESIMPULAN      CODE DARI GLOBAL AKAN DIEKSEKUSI TERLEBIH DULU DAN FUNCTION DAN CONSOLE.LOG AKAN DI HOISTING
