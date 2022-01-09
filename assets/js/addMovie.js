let movieInArray = [];

function addingMovie(event) {
    event.preventDefault();
    let movieName = document.getElementById("movieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("moviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("musicDirector").value;

    let firstSongName = document.getElementById("firstSongName").value;
    console.log(firstSongName);

    let firstSongUrl = document.getElementById("firstSongUrl").value;
    console.log(firstSongUrl);
    let secondSongName = document.getElementById("secondSongName").value;
    console.log(secondSongName);
    let secondSongUrl = document.getElementById("secondSongUrl").value;
    console.log(secondSongUrl);
    let thirdSongName = document.getElementById("thirdSongName").value;
    let thirdSongUrl = document.getElementById("thirdSongUrl").value;

    let artistName = document.getElementById("artistName").value;
    let artistImg = document.getElementById("artistImg").value;

    const movieList = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector,
        "songs":[{"nameOfFirstSong":firstSongName,"urlOfFirstSong":firstSongUrl,
        "nameOfSecondSong":secondSongName,"urlOfSecondSong":secondSongUrl ,
        "nameOfThirdSong":thirdSongName,"urlOfThirdSong":thirdSongUrl}],
        "artistName":artistName,
        "artistImg":artistImg 
    }

    
    let validatingMovieName = validateMovieName(movieName);
    if(validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }

    movieInArray.push(movieList);
    console.log(movieInArray);

   

    const movieListInString = JSON.stringify(movieInArray);
    localStorage.setItem("Movies", movieListInString);


    renderingMovie();
    
    window.location.href = "./../pages/moreSongs.html"
}

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    if (movieListInParse == null) {
        localStorage.setItem("Movies", "[]");
    }
    console.table(movieListInParse);
    movieInArray = movieListInParse;

}
renderingMovie();

function validateMovieName(movieName){

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    let isExist = false;
    console.log(movieListInParse.movieName);
    
    if(movieListInParse != null){
    for(let i=0;i<movieListInParse.length;i++){

        let tamilMovieList =movieListInParse[i].movieName;
        if(movieName.toLowerCase()==tamilMovieList.toLowerCase()){
            isExist =true;
            break;
        }

    }

}
return isExist;
}



