//CLOSURE
// inner function memiliki akses ke parent variabelnya, atau function memiliki function inner, isinya
// console.log(nama) yang terdapat pada function pertama. maka itulah yang disebut lexical scope
function init() {
  let nama = "Bambang";
  function tampilNama() {
    console.log(nama);
  }
  tampilNama();
}
init();
// CLOSURE harus menganut lexical scope
