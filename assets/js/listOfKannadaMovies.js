let movieInArray = [];

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("kannadaMovies"));
    if (movieListInParse == null) {
        localStorage.setItem("kannadaMovies", "[]");
    }
    console.table(movieListInParse);
    movieInArray = movieListInParse;

    addingMovieInHtml();

}


function addingMovieInHtml() {

    console.group("addingMovieInHtml");
    const movieListInParse = JSON.parse(localStorage.getItem("kannadaMovies"));

    console.log(movieListInParse);

    let len = movieListInParse.length;
    let movies = '';

    for (let i=0; i<len; i++) {
        let movieNames = movieListInParse[i].movieName;
        let moviePosters = movieListInParse[i].moviePoster;
        let musicDirector = movieListInParse[i].musicDirector;

        movies +=
            `<div class='addingMovie'>
        <span class='movieList'><img src="${moviePosters}" alt='${movieNames}' class='movieImg'>
        <a href="./storingKannadaSongs.html?movies=${movieNames}">
        <p class='moviesName'>${movieNames}</p>
        <p class='musician'>${musicDirector}</p></a>
        <img src="./../assets/img/bin.png" alt="more" id="moreOption" onclick="removeMovie(${i})">
        </span><br><br><br><br>
        </div>`
    }

    let allMovies = document.getElementById("kannadaMovieList"); 
    console.log(allMovies);
    allMovies.innerHTML = movies;

    console.log(allMovies.innerHTML)

    console.groupEnd("addingMovieInHtml")
}

renderingMovie();

let movielist =[];
function removeMovie(index){

    console.group("removemovie")

    const movieListInParse = JSON.parse(localStorage.getItem("kannadaMovies"));
    console.log(movieListInParse);
    
    movieListInParse.splice(index,index);
    
    
    const movieInString = JSON.stringify(movieListInParse);
    
    localStorage.setItem("kannadaMovies",movieInString)
    addingMovieInHtml();


}





