const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

const jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((acc, cur) => acc + cur);
let jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit ${detik} detik`;
const jmlVid = video.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const jmlVideo = document.querySelector(".jumlah-video");
jmlVideo.textContent = `${jmlVid} Video`;
console.log(jsLanjut);
