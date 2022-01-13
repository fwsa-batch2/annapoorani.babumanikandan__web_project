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
            `<div class='addingMovie' id="${movieNames}">
                
                <span class='movieList'>
                <a href="./../pages/newSongs.html?movie=${movieNames}">
                <img src="${moviePosters}" alt='${movieNames}' class='movieImg'>
                <p class='moviesName'>${movieNames}</p>
                <p class='musician'>${musicDirector}</p></a>
                <img src="./../assets/img/bin.png" alt="more" id="moreOption" onclick="removeMovie(${i})">
                </span><br><br><br><br>
                
                
            </div>`
    }

    let allMovies = document.getElementById("moviesList"); //addingMovie
    console.log(allMovies);
    allMovies.innerHTML = movies;

    console.log(allMovies.innerHTML);
   
    console.groupEnd("addingMovieInHtml");
}

renderingMovie();

let movielist =[];
function removeMovie(index){

    console.group("removemovie")
    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    console.log(movieListInParse);
    
    movieListInParse.splice(index,index);
    
    
    const movieInString = JSON.stringify(movieListInParse);
    
    localStorage.setItem("Movies",movieInString)
    addingMovieInHtml();


}








