let movieInArray = []

function addingMovie() {
    event.preventDefault();
    let movieName = document.getElementById("movieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("moviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("musicDirector").value;

    const movieList = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector
    }

    movieInArray.push(movieList);
    console.log(movieInArray);

    const movieListInString = JSON.stringify(movieInArray);
    localStorage.setItem("Movies", movieListInString);


    renderingMovie();
    // addingMovieInHtml();
    window.location.href = "./../pages/moreSongs.html"
}

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    if (movieListInParse == null) {
        localStorage.setItem("Movies", "[]");
    }
    console.table(movieListInParse);
    movieInArray = movieListInParse;

}
renderingMovie()