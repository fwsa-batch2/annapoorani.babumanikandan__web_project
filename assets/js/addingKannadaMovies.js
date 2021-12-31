let kannadaMovieInArray = []

function addingMovie(event) {
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

    const validatingMovieName = validateMovieName(movieName);
    if(validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }

    kannadaMovieInArray.push(listOfKannadaMovies);
    console.log(kannadaMovieInArray);

    const movieListInString = JSON.stringify(kannadaMovieInArray);
    localStorage.setItem("kannadaMovies", movieListInString);


    renderingMovie();
    
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
renderingMovie();

function validateMovieName(movieNames){

    const movieListInParse = JSON.parse(localStorage.getItem("kannadaMovies"));
    let isExist = false;

    if( movieListInParse!=null){
        for(let i=0;i< movieListInParse.length;i++){
            const kannadaMovieList =  movieListInParse[i].movieName;
            if(movieNames.toLowerCase()==kannadaMovieList.toLowerCase()){
                isExist=true;
                break;
            }
        }
    }
    return isExist;
}