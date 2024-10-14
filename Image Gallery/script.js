const container = document.querySelector(".container");
const utama = document.querySelector(".utama");
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  //cek apakah yang diklik
  if (e.target.className == "thumb") {
    utama.src = e.target.src;
    utama.classList.add("anime");
    setTimeout(function () {
      utama.classList.remove("anime");
    }, 500);
    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains("active")){
      //     thumb.classList.remove('active');
      //   }
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
