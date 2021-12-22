let kannadaMovieInArray = []

function addingMovie() {
    event.preventDefault();
    let movieName = document.getElementById("kannadaMovieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("kannadaMoviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("kannadaMusicDirector").value;

    const listOfKannadaMovies = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector
    }

    kannadaMovieInArray.push(listOfKannadaMovies);
    console.log(kannadaMovieInArray);

    const movieListInString = JSON.stringify(kannadaMovieInArray);
    localStorage.setItem("kannadaMovies", movieListInString);


    renderingMovie();
    // addingMovieInHtml();
    window.location.href = "./../pages/moreKannadaMovies.html"
}

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("kannadaMovies"));
    if (movieListInParse == null) {
        localStorage.setItem("kannadaMovies", "[]");
    }
    console.table(movieListInParse);
    kannadaMovieInArray = movieListInParse;

}
renderingMovie()