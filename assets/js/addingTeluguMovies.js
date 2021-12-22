let teluguMovieInArray = []

function addingMovie() {
    event.preventDefault();
    let movieName = document.getElementById("teluguMovieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("teluguMoviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("teluguMusicDirector").value;

    const movieList = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector
    }

    teluguMovieInArray.push(movieList);
    console.log(teluguMovieInArray);

    const movieListInString = JSON.stringify(teluguMovieInArray);
    localStorage.setItem("teluguMovies", movieListInString);


    renderingMovie();
    // addingMovieInHtml();
    window.location.href = "./../pages/moreTeluguMovies.html"
}

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("teluguMovies"));
    if (movieListInParse == null) {
        localStorage.setItem("teluguMovies", "[]");
    }
    console.table(movieListInParse);
    teluguMovieInArray = movieListInParse;

}
renderingMovie()