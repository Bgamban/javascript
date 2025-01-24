// Callbacks
// Syncronous Callback
// function halo(nama) {
//   alert("halo", +nama);
// }
// function tampilkanPesan(callbacks) {
//   const nama = prompt("Masukkan Nama :");
//   callbacks(nama);
// }
// tampilkanPesan(halo); atau:

// function tampilkanPesan(callbacks) {
//     const nama = prompt("Masukkan Nama :");
//     callbacks(nama);
//   }
//   tampilkanPesan((nama)=> {
//     alert(`Halo, ${nama}`)
//   });

// let mhs = [
//   {
//     nama: "R Bambang Kurniawan",
//     nrp: "123456",
//     email: "kurniawanbambang@gmail.com",
//     jurusan: "Teknik Informatika",
//   },
//   {
//     nama: "Nora Yudistinawati",
//     nrp: "654321",
//     email: "nors@gmail.com",
//     jurusan: "Teknik Informatika",
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// Asynchronous Callback
function getDataMahasiswa(url, succes, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}
// tambahkan 2 function ini, atau buat anonymous function
// function succes(){

// }
// function error(){

// }
console.log("mulai");
getDataMahasiswa(
  "data/mahasiswa.json",
  (result) => {
    const mhs = JSON.parse(result);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log("selesai");
