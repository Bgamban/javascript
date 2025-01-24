// Callback
// // Syncronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`)

// Synchronous
// }
// function tampilkanPesan(Callback) {
//   const nama = prompt("Masukkan Nama :");
//   Callback(nama);
// }
// tampilkanPesan((nama) => {
//   alert(`Halo ${nama}`);
// });

// let mhs = [
//       {
//         nama: "R Bambang Kurniawan",
//         nrp: "123456",
//         email: "kurniawanbambang@gmail.com",
//         jurusan: "Teknik Informatika",
//       },
//       {
//         nama: "Nora Yudistinawati",
//         nrp: "654321",
//         email: "nors@gmail.com",
//         jurusan: "Teknik Informatika",
//       },
//     ];
//     console.log(mulai)
//     mhs.forEach(m=> console.log(m.nama)){
//         for(let i= 0; i< 100000000; i++){
//             let date= new Date
//         }
//     }
//     console.log(selesai)

// Ubah jadi Asynchronous Callback
function getDataMahasiswa(url, succes, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
}
