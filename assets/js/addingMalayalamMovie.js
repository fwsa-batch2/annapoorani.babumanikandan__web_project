let malayalaMoviesInArray = []

function addingMovie(event) {
    event.preventDefault();
    let movieName = document.getElementById("malayalamMovieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("malayalamMoviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("malayalamMusicDirector").value;

    let firstSongNameOfMm = document.getElementById("firstSongNameOfMm").value;
    let firstSongUrl = document.getElementById("firstSongUrlOfMm").value;
    
    let secondSongNameOfMm = document.getElementById("secondSongNameOfMm").value;
    let secondSongUrl = document.getElementById("secondSongUrlOfMm").value;

    let thirdSongNameOfMm = document.getElementById("thirdSongNameOfMm").value;
    let thirdSongUrl = document.getElementById("thirdSongUrlOfMm").value;

    let artistName = document.getElementById("artistNameOfMm").value;
    let artistImg = document.getElementById("artistImgOfMm").value;

    const listOfMalayalamMovies = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector,
        "malayalamSong":[{"nameOfFirstSong":firstSongNameOfMm,"urlOfFirstSong":firstSongUrl,
        "nameOfSecondSong":secondSongNameOfMm,"urlOfSecondSong":secondSongUrl ,
        "nameOfThirdSong":thirdSongNameOfMm,"urlOfThirdSong":thirdSongUrl}],
        "artistName":artistName,
        "artistImg":artistImg
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
        for(let i=0;i<movieListInParse.length;i++){
            const malayalaMovieName = movieListInParse[i].movieName;
        
            if(movieNames.toLowerCase()==malayalaMovieName.toLowerCase()){
                isExist =true;
                break;
        }
    }
    return isExist;
}
}