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

      //Ketika Tombol Detail di-klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=8b0859ad&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText());
          },
        });
      });
    },
    error: (e) => {
      console.error(e.responseText);
    },
  });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
      </div>
    </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
        <li class="list-group-item">
        <h4>${m.Title}${m.Year}</h4>
        </li>
          <li class="list-group-item"><h4>Judul : </h4>${m.Title}</li>
          <li class="list-group-item"><strong>Penulis : </strong>${m.Director}</li>
          <li class="list-group-item"><strong>Pemeran : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
          <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
