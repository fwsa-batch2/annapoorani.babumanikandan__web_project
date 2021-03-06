let kannadaMovieInArray = []

function addingMovie(event) {
    event.preventDefault();
    let movieName = document.getElementById("kannadaMovieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("kannadaMoviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("kannadaMusicDirector").value;
    let firstSongNameOfKm = document.getElementById("firstSongNameOfKm").value;
    let firstSongUrl = document.getElementById("firstSongUrlOfKm").value;
    
    let secondSongNameOfKm = document.getElementById("secondSongNameOfKm").value;
    let secondSongUrl = document.getElementById("secondSongUrlOfKm").value;

    let thirdSongNameOfKm = document.getElementById("thirdSongNameOfKm").value;
    let thirdSongUrl = document.getElementById("thirdSongUrlOfKm").value;

    let artistName = document.getElementById("artistNameOfKm").value;
    let artistImg = document.getElementById("artistImgOfKm").value;


    const listOfKannadaMovies = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector,
        "KannadaSong":[{"name":firstSongNameOfKm,"url":firstSongUrl},
        {"name":secondSongNameOfKm,"url":secondSongUrl} ,
        {"name":thirdSongNameOfKm,"url":thirdSongUrl}],
        "artistName":artistName,
        "artistImg":artistImg
    }

    const validatingMovieName = validateMovieName(movieName);
    if(validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }

    let validatingSongs =validateSong(firstSongNameOfKm,secondSongNameOfKm,thirdSongNameOfKm);
    if(validatingSongs){
        alert("The song is already existed");
        return
    }

    kannadaMovieInArray.push(listOfKannadaMovies);
    console.log(kannadaMovieInArray);

    const movieListInString = JSON.stringify(kannadaMovieInArray);
    localStorage.setItem("kannadaMovies", movieListInString);


    renderingMovie();
    
    window.location.href = "./../pages/moreKannadaMovies.html"
}
// OnPage load
function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("kannadaMovies"));
    if (movieListInParse == null) {
        localStorage.setItem("kannadaMovies", "[]");
    }
    console.table(movieListInParse);
    kannadaMovieInArray = movieListInParse;

}
renderingMovie();
// Validating movie name
function validateMovieName(movieNames){

    const movieListInParse = JSON.parse(localStorage.getItem("kannadaMovies"));
    let isExist = false;

    if( movieListInParse!=null){
        let len =movieListInParse.length
        for(let i=0;i<len;i++){
            const kannadaMovieList =  movieListInParse[i].movieName;
            if(movieNames.toLowerCase()==kannadaMovieList.toLowerCase()){
                isExist=true;
                break;
            }
        }
    }
    return isExist;
}
// Validating songs
function validateSong(song1,song2,song3){
    let isSongExist = false;
if(song1===song2||song2===song3 || song1===song3 || song1===song2===song3){
    isSongExist =true;
}
return isSongExist;
} 