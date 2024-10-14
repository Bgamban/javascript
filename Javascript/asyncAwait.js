// const coba = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve("selesai");
//     }, 2000)
//   reject("gagal");
// });
// coba.then(() => console.log(coba));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolved("selesai");
      }, waktu);
    } else {
      reject("osoi");
    }
  });
}
// Promise
// const coba = cobaPromise();    // Tanpa 2 ini cobaPromise tidak akan bisa dijalankan sebagai ganti gunakan try & catch
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// Async Await
async function cobaAsync() {
  // ini cara selain menggunakan then&catch
  try {
    //try untuk resolve
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    //catch untuk reject
    console.error(err);
  }
}
cobaAsync();
