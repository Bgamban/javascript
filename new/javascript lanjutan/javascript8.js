// const nama = "Bambang";
// const umur = 21;
// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str} ${values[i] || ''}`;
//   //   });
//   //   return result;
//   // }

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }
// const str = coba`Halo, nama saya ${nama}, dan usia saya ${umur} tahun`;
// console.log(str);

// Highlight
const nama = "Bambang";
const umur = 21;
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}
const str = highlight`Halo, nama saya ${nama}, dan usia saya ${umur} tahun`;
console.log(str);

document.body.innerHTML = str;

// Hasil Acak
// const nama = "Bambang";
// const umur = 21;

// function coba(rek, ...values) {
//   let result = "";
//   rek.forEach((st, o) => {
//     result += `${st}${values[o] || ""}`;
//   });
//   return rek;
// }

// const str = coba`Halo saya, ${nama} dan usia saya, ${umur} tahun`;
// console.log(str);
