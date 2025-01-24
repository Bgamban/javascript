// Async Await
// const coba = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// coba.then(() => console.log(coba))

function cobaPromise() {
  const coba = new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}
// const coba = cobaPromise();
// coba.then(coba => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}
cobaAsync();

// Error Handling
