let teluguMovieInArray = []

function addingMovie(event) {
    event.preventDefault();
    let movieName = document.getElementById("teluguMovieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("teluguMoviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("teluguMusicDirector").value;

    let firstSongNameOfTm = document.getElementById("firstSongNameOfTm").value;
    let firstSongUrl = document.getElementById("firstSongUrlOfTm").value;
    
    let secondSongNameOfTm = document.getElementById("secondSongNameOfTm").value;
    let secondSongUrl = document.getElementById("secondSongUrlOfTm").value;

    let thirdSongNameOfTm = document.getElementById("thirdSongNameofTm").value;
    let thirdSongUrl = document.getElementById("thirdSongUrlOfTm").value;

    let artistName = document.getElementById("artistNameOfTm").value;
    let artistImg = document.getElementById("artistImgOfTm").value;

    const movieList = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector,
        "teluguSong":[{"name":firstSongNameOfTm,"url":firstSongUrl},
        {"name":secondSongNameOfTm,"url":secondSongUrl} ,
        {"name":thirdSongNameOfTm,"url":thirdSongUrl}],
        "artistName":artistName,
        "artistImg":artistImg

    }

    const validatingMovieName = validateMovieName(movieName);
    if(validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }

    let validatingSongs =validateSong(firstSongNameOfTm,secondSongNameOfTm,thirdSongNameOfTm );
    if(validatingSongs){
        alert("The song is already existed");
        return
    }

    teluguMovieInArray.push(movieList);
    console.log(teluguMovieInArray);

    const movieListInString = JSON.stringify(teluguMovieInArray);
    localStorage.setItem("teluguMovies", movieListInString);


    renderingMovie();
    
    window.location.href = "./../pages/moreTeluguMovies.html"
}
// OnPage load
function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("teluguMovies"));
    if (movieListInParse == null) {
        localStorage.setItem("teluguMovies", "[]");
    }
    console.table(movieListInParse);
    teluguMovieInArray = movieListInParse;

}
renderingMovie();
// Validating Movie name
function validateMovieName(movieNames){

    const movieListInParse = JSON.parse(localStorage.getItem("teluguMovies"));
    let isExist = false;

    if(movieListInParse!=null){
        let len =movieListInParse.length;
        for(let i=0; i<len;i++){
            const teluguMovieName = movieListInParse[i].movieName;

            if(movieNames.toLowerCase()==teluguMovieName.toLowerCase()){
                isExist =true;
                break;
            }
        }
    }
    return isExist;
}
// Validating Songs
function validateSong(song1,song2,song3){
    let isSongExist =false;
if(song1===song2||song2===song3 || song1===song3 || song1===song2===song3){
    isSongExist =true;
}
return isSongExist;
} 