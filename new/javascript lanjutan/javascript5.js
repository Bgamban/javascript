// // // THIS MENGACU PADA OBJECTNYA YAITU MAHASISWA SEHINGGA MENCETAK SECARA INSTANSIASI
// const Mahasiswa = function () {
//   this.nama = "Bambang";
//   this.umur = 21;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur}`);
//   };
// };
// const Bambang = new Mahasiswa();

// const Mahasiswa = function () {
//   this.nama = "Bambang";
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur}`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 5000);
// };
// const Bambang = new Mahasiswa();
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle("satu");
  setTimeout(() => {
    this.classList.toggle("dua");
  }, 500);
});
