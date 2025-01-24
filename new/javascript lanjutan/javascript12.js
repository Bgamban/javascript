// var x = prompt("Masukkan Nilai");
// var urutan = "";
// for (var i = 1; i <= x; i++) {
//   if (i % 2 != 0) {
//     urutan = urutan + "" + i;
//   }
// }
// alert(urutan);

// Spread Operator
// const mhs = ["Bambang", "Sandhika", "Galih"];
// const fiksi = ["Resya", "Nora", "Harry"];
// // const orang = [...mhs, "Firman",...fiksi]; atau:
// const orang = mhs.concat(fiksi);
// console.log(orang)

// Mengcopy Array
// const mhs = ["Bambang", "Sandhika", "Galih"];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = "Aji";
// console.log(mhs1);

// const nama = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < nama.length; i++) {
//   mmhs.push(nama[i].textcontent);
// }
// console.log(mhs);

// const mhs = nama.map(m=> m.textContent); //ini hasilnya akan error karena hasilny nodelist. Karena nodelist tidak memiliki method map
// console.log(mhs) //agar berhasil ubah menjadi seperti berikut: [...nama].map(m=> m.textContent);

// Untuk h1 Hiraishin
const nama = Array.from(document.querySelectorAll(".nama"));
const huruf = nama.map((element) => element.textContent);
function addSpans(str, indexArrays) {
  let result = "";
  const chars = str.split("");
  for (const m of chars.length) {
    let char = chars[i];
    let isSpanned = false;
    indexArrays.forEach((arr) => {
      if (arr.includes(i)) {
        char = `<span>${char}</span>`;
        isSpanned = true;
      }
    });
    result += char;
  }
  return result;
}
// const pisahKan = [...huruf].map(i => i.)
// const huru = huruf.map((h) => `<span>${h}</span>`).join("");
// nama.innerHTML = huru;
// console.log(huruf);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (const liMhs of li) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log;

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

//Hiraishin
// const huruf = [];
// nama.forEach((element) => {
//   huruf.push(element.textContent);
// });
// console.log(huruf);
