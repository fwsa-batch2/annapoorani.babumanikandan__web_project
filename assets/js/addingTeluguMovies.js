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
        "teluguSong":[{"nameOfFirstSong":firstSongNameOfTm,"urlOfFirstSong":firstSongUrl,
        "nameOfSecondSong":secondSongNameOfTm,"urlOfSecondSong":secondSongUrl ,
        "nameOfThirdSong":thirdSongNameOfTm,"urlOfThirdSong":thirdSongUrl}],
        "artistName":artistName,
        "artistImg":artistImg

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