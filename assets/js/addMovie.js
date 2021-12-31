let movieInArray = []

function addingMovie(event) {
    event.preventDefault();
    let movieName = document.getElementById("movieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("moviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("musicDirector").value;
    let firstSongName = document.getElementById("firstSongName").value;
    console.log(firstSongName);

    let firstSong = document.getElementById("firstSong").value;
    console.log(firstSong);
    let secondSongName = document.getElementById("secondSongName").value;
    let secondSong = document.getElementById("secondSong").value;

    let thirdSongName = document.getElementById("thirdSongName").value;
    let thirdSong = document.getElementById("thirdSong").value;

    let artistName = document.getElementById("artistName").value;
    let artistImg = document.getElementById("artistImg").value;

    const movieList = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector,
        "songs":[{"firstSongName":firstSongName,"firstSongUrl":firstSong,"secondSongName":secondSongName,"secondSongUrl":secondSong ,"thirdSongName":thirdSongName,"thirdSongUrl":thirdSong}],
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

function validateMovieName(movieNames){

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    let isExist = false;
    
    if(movieListInParse != null){
    for(let i of movieListInParse){
        const tamilMovieList = movieListInParse[i].movieName;

        if(movieNames.toLowerCase()==tamilMovieList.toLowerCase()){
            isExist =true;
            break;
        }

    }

}
return isExist;
}



