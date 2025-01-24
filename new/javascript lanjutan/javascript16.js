// Promise
// Berikut adalah Jquery Ajax
// $.ajax({
//   url: "http://omdbapi.com/?apikey=dca61bcc&s=avengers",
//   succes: (response) => console.log(response),
//   error: (err) => console.log(err),
// });

// Berikut adalah Jquery versi Javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bc&s=avengers");
// xhr.send();

// Javascript Modern ada yang lebih simpel yaitu menggunakan fetch:
// fetch("http://www.omdbapi.com/?apikey=dca61bc&s=avengers").then(response => response.json()).then(response => console.log(response))

// Promise adalah Object yang merepresentasikan keberhaasilan / kegagalan sebuah event Asynchronous yang akan terjadi
// dimasa yang akan datang:
// janji(terpenuhi / ingkar)
// states(fullfield / rejected / pending)
// callback (resolve / reject / finally)
// aksi( terpenuhi=then | ingkar=catch)

// Contoh 1
// let ditepati = true; //tinggal isi true atau false agar menampilkan .then atau .catch
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve(<a href="../DOM Traversal/dom.html"></a>);
//   } else {
//     reject("ingkar janji");
//   }
// });
// janji1.then((response) => console.log("OKE :" + response)).catch((response) => console.log("NOT OK :" + response));

// Contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve(`Dibayar setelah sekian lama`);
    }, 2000);
  } else {
    setTimeout(() => {
      resolve(`Tidak dibayar`);
    }, 2000);
  }
});
console.log("mulai");
// console.log(janji2.then(()=> console.log(janji2)));
janji2
  .finally(() => console.log("selesai menunggu"))
  .then((response) => console.log("OKE :" + response))
  .catch((response) => console.log("NOT OK :" + response));
console.log("selesai");

// Promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Sandhika",
        pemeran: "Nora",
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Sukabumi",
        temperature: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));
Promise.all([film, cuaca]) //.then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
