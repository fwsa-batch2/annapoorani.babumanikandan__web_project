let movieInArray = [];

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    if (movieListInParse == null) {
        localStorage.setItem("Movies", "[]");
    }
    console.table(movieListInParse);
    movieInArray = movieListInParse;

    addingMovieInHtml();


}


function addingMovieInHtml() {

    console.group("addingMovieInHtml");
    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));

    console.log(movieListInParse);

    let len = movieListInParse.length;
    let movies = ''

    for (let i = 0; i<len; i++) {
        let movieNames = movieListInParse[i].movieName;

        let moviePosters = movieListInParse[i].moviePoster;
        let musicDirector = movieListInParse[i].musicDirector;

        movies +=
            `<div class='addingMovie'>
                <a href="./newSongs.html?movie=${movieNames}">
                <span class='movieList'><img src="${moviePosters}" alt='${movieNames}' class='movieImg'>
                <p class='moviesName'>${movieNames}</p>"
                <p class='musician'>${musicDirector}</p>
                </span><br><br><br><br>
                </a>
            </div>`
    }

    let allMovies = document.getElementById("moviesList"); //addingMovie
    console.log(allMovies);
    allMovies.innerHTML = movies;

    console.log(allMovies.innerHTML);
   
    console.groupEnd("addingMovieInHtml");
}

renderingMovie();







