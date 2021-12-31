let teluguMovieInArray = []

function addingMovie(event) {
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

    const validatingMovieName = validateMovieName(movieName);
    if(validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }


    teluguMovieInArray.push(movieList);
    console.log(teluguMovieInArray);

    const movieListInString = JSON.stringify(teluguMovieInArray);
    localStorage.setItem("teluguMovies", movieListInString);


    renderingMovie();
    
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
renderingMovie();

function validateMovieName(movieNames){

    const movieListInParse = JSON.parse(localStorage.getItem("teluguMovies"));
    let isExist = false;

    if(movieListInParse!=null){
        for(let i=0;i<movieListInParse.length;i++){
            const teluguMovieName = movieListInParse[i].movieName;

            if(movieNames.toLowerCase()==teluguMovieName.toLowerCase()){
                isExist =true;
                break;
            }
        }
    }
    return isExist;
}