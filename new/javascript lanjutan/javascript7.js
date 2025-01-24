// Template Literals
// const nama = "Bambang";
// const umur = 21;
// console.log(`Halo nama saya ${nama} dan usia saya ${umur}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
// const mahasiswa = {
//   nama: "Bambang",
//   usia: 21,
//   nrp: 123455677,
// };
// const el = `<div class="fragments">
// <h2>${this.nama}</h2>
// <span class="nrp">${mahasiswa.nrp}</span>
// </div>`;
// console.log(el);

// Looping
// const mhs = [
//   {
//     nama: "Bambang",
//     email: "kurniawanbambang@gmail.com",
//   },
// ];
// const el = `<div class="mhs"> ${mhs.map((m) => `<ul> <li>${m.nama}</li> <li> ${m.email}</li> </ul>`)}</div>;`;
// document.body.innerHTML = el;

// Conditional
// const lagu = {
//   judul: "nama",
//   penyanyi: "RF",
//   feet: "RA",
// };
// const el = `<div class="lagu"><ul><li>${lagu.penyanyi}</li><li>${lagu.judul}${lagu.feat ?`(feat.${lagu.feat})`: ''}</li></ul></div>`;
// document.body.innerHTML = el;

// Nested
const mhs = {
  nama: "Bambang",
  semester: 5,
  matakuliah: ["SO", "PM"],
};
function cetakMataKuliah(matakuliah) {
  return `<ol>${matakuliah.map((mk) => "<li>${mk}</li>")}</ol>`;
}
const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester :${mhs.semester}</span>
<h4>matakuliah :</h4>
${cetakMataKuliah(mhs.matakuliah)}</div>`;

document.body.innerHTML = el;
