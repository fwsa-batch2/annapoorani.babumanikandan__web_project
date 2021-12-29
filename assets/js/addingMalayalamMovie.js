let malayalaMoviesInArray = []

function addingMovie() {
    event.preventDefault();
    let movieName = document.getElementById("malayalamMovieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("malayalamMoviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("malayalamMusicDirector").value;

    const listOfMalayalamMovies = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector
    }

    const validatingMovieName = validateMovieName(movieName);
    if(validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }

    malayalaMoviesInArray.push(listOfMalayalamMovies);
    console.log(malayalaMoviesInArray);

    const movieListInString = JSON.stringify(malayalaMoviesInArray);
    localStorage.setItem("MalayalamMovies", movieListInString);


    renderingMovie();
    // addingMovieInHtml();
    window.location.href = "./../pages/moreMalayalamMovies.html"
}

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("MalayalamMovies"));
    if (movieListInParse == null) {
        localStorage.setItem("MalayalamMovies", "[]");
    }
    console.table(movieListInParse);
    malayalaMoviesInArray = movieListInParse;

}
renderingMovie();

function validateMovieName(movieNames){
    const movieListInParse = JSON.parse(localStorage.getItem("MalayalamMovies"));
    let isExist=false;
    
    if(movieListInParse!=null){
        for(i=0;i<movieListInParse.length;i++){
            const malayalaMovieName = movieListInParse[i].movieName;
        
            if(movieNames.toLowerCase()==malayalaMovieName.toLowerCase()){
                isExist =true;
                break;
        }
    }
    return isExist;
}
}