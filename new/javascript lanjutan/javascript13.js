// Rest Parameter
// function jumlahkan(...myArgs) {
//   let total = "";
//   for (const a of myArgs) {
//     total += a;
//   }
//   return total;
// } atau:
// return angka.reduce((a,b)=> a+b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array Destructuring
// const kelompok = ['C', 'N', 'B', 'J', 'T'];
// const [ketua, wakil, ...anggota] = kelompok;
// console.log(ketua);

// Object Destructuring
// const team = {
//     pm : "Bambang",
//     frontEnd: "Nora",
//     backEnd: "Resya",
//     devOps: "Willie",
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam)

// Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("string", 1, 2, "Bambang", false, 10, true, "Nora"));
