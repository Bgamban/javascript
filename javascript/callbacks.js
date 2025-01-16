// function tampilkanPesan(pesan) {
//   console.log(pesan);
// }
// function hitungLambat(angka, callback) {
//   setTimeout(function () {
//     const hasil = angka * 2;
//     callback(hasil);
//   }, 1000);
// }
// hitungLambat(5, tampilkanPesan);

$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=8b0859ad&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=8b0859ad&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
  <div class="card">
    <img src="${m.Poster}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
      <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
    </div>
  </div>
</div>`;
}

function showDetail(m) {
  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" class="img-fluid" alt="" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>Judul: ${m.Title} Tahun: ${m.Year}</h4></li>
        <li class="list-group-item"><strong>Sutradara: ${m.Director}</strong></li>
        <li class="list-group-item"><strong>Pemeran: ${m.Actors}</strong></li>
        <li class="list-group-item"><strong>Penulis: ${m.Writer}</strong></li>
        <li class="list-group-item"><strong>Plot: ${m.Plot}</strong></li>
      </ul>
    </div>
  </div>
</div>`;
}
