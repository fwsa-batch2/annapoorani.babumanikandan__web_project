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
        "musicDirector": musicDirector,
        "songs": [
            { "name": firstSongName, "url": firstSongUrl },
            { "name": secondSongName, "url": secondSongUrl },
            { "name": thirdSongName, "url": thirdSongUrl }
        ],
        "artistName": artistName,
        "artistImg": artistImg
    }


    let validatingMovieName = validateMovieName(movieName);
    if (validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }

    let validatingSongs =validateSong(firstSongName,secondSongName,thirdSongName);
    if(validatingSongs){
        alert("The song is already existed");
        return;
    }

    movieInArray.push(movieList);
    console.log(movieInArray);



    const movieListInString = JSON.stringify(movieInArray);
    localStorage.setItem("Movies", movieListInString);


    renderingMovie();

    window.location.href = "./../pages/moreSongs.html"
}
// onPage load 
function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    if (movieListInParse == null) {
        localStorage.setItem("Movies", "[]");
    }
    console.table(movieListInParse);
    movieInArray = movieListInParse;

}
renderingMovie();
// Validating movie name
function validateMovieName(movieName) {

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    let isExist = false;
    

    if (movieListInParse != null) {
        let len = movieListInParse.length;
        for (let i = 0; i < len; i++) {

            let tamilMovieList = movieListInParse[i].movieName;
            if (movieName.toLowerCase() == tamilMovieList.toLowerCase()) {
                isExist = true;
                break;
            }

        }

    }
    return isExist;
}
// Validating songs
function validateSong(song1,song2,song3){
    let isSongExist =false;
if(song1===song2||song2===song3 || song1===song3 || song1===song2===song3){
    isSongExist =true;
}
return isSongExist;
} 
