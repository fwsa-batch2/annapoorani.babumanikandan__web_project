// function addingFirstSong() {

//     const movieListInParse = JSON.parse(localStorage.getItem("Movies"));

//     let songs = ''

//     for (i = 0; i < movieListInParse.length; i++) {

//         let firstSongOfTamilMovie = movieListInParse[i].firstSong;
//         let firstSongName = movieListInParse[i].firstSongName;
//         let secondSongOfTamilMovie = movieListInParse[i].secondSong;
//         let secondSongName = movieListInParse[i].secondSongName;
//         let thirdSongOfTamilMovie = movieListInParse[i].thirdSong;
//         let thirdSongName = movieListInParse[i].thirdSongName;
//         let moviePosters = movieListInParse[i].moviePoster;
//         let movieNames = movieListInParse[i].movieName;
//         let artistName = movieListInParse[i].artistName;
//         let artistImg = movieListInParse[i].artistImg


//         songs += ` <div class='div1'>
//         <span class='span1'>

//             <br><br>
//             <img id='abi' src='${moviePosters}' alt='${movieNames}></span>

//         <div class='artist'>
//             <span><h1>Artists</h1></span>
//             <span ><img src='${artistImg}' alt='${artistName}' class='artistImg'> <p class='artistName'>${artistName}</p></span>
//             <span ><img src='' alt='' class=artistImg> <p class=artistName></p></span>

//         </div>
//         <div class='div2'><ul id='myUl'>
//         <li>${firstSongName} </li><br>
//         <li><audio controls>
//             <source src='${firstSongOfTamilMovie}' type='audio/mpeg'>
//         </audio><br><br>
//         </li></ul>
//         <li>${secondSongName} </li><br>
//         <li><audio controls>
//         <source src='${secondSongOfTamilMovie}' type='audio/mpeg'>
//     </audio><br><br>
//     </li></ul>
//     <li>${thirdSongName} </li><br>
//     <li><audio controls>
//     <source src='${thirdSongOfTamilMovie}' type='audio/mpeg'>
// </audio><br><br>
// </li></ul></div>`

//     }

//     let movieSongs = document.getElementsByClassName("div2");
//     console.log(movieSongs);

//     movieSongs.innerHTML = songs;
//     console.log(movieSongs);

//     // window.location.href="./../pages/newSongs.html"

// }


// params , query


const currentUrl = window.location.search
const urlParam = new URLSearchParams(currentUrl);
const movieName = urlParam.get("movie");

console.log(movieName);


function getMovieDetails(name) {

    const movieList = JSON.parse(localStorage.getItem("Movies"));
    console.log(movieList);

    const movie = movieList.find(element => element.movieName == name);
    console.log(movie);

    addingSongs();
    return movie;

}
getMovieDetails(movieName);

function addingSongs() {

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));

    let songs = ''

    for (i = 0; i < movieListInParse.length; i++) 
    {

        let moviePosters = movieListInParse[i].moviePoster;
        let movieNames = movieListInParse[i].movieName;
        let artistName = movieListInParse[i].artistName;
        let artistImg = movieListInParse[i].artistImg;

        for (j = 0; j < movieListInParse.songs.length; j++) {
            let songName = movieListInParse[i].songs[j];
            let songUrl = movieListInParse[i].songs[j];
        
        // let song = movieListInParse[i].songs;
        // let songUrl = song.Map.get('firstSong');



        songs += ` <div class='div1'>
            <span class='span1'>
                
                <br><br>
                <img id='abi' src='${moviePosters}' alt='${movieNames}></span>
    
            <div class='artist'>
                <span><h1>Artists</h1></span>
                <span ><img src='${artistImg}' alt='${artistName}' class='artistImg'> <p class='artistName'>${artistName}</p></span>
                <span ><img src='' alt='' class=artistImg> <p class=artistName></p></span>
              
            </div>
            <div class='div2'><ul id='myUl'>
            <li>${songName} </li><br>
            <li><audio controls>
                <source src='${songUrl}' type='audio/mpeg'>
            </audio><br><br>
            </li></ul>
            <li>${songName} </li><br>
            <li><audio controls>
            <source src='${songUrl}' type='audio/mpeg'>
        </audio><br><br>
        </li></ul>
        <li>${songName} </li><br>
        <li><audio controls>
        <source src='${songUrl}' type='audio/mpeg'>
    </audio><br><br>
    </li></ul></div>`

    }

    let movieSongs = document.getElementById("mainContent");
    console.log(movieSongs);

    movieSongs.innerHTML = songs;
    console.log(movieSongs);

}
}

// {
// name: "",

// songs: [
//     {name: "chellama", url:""},
//     {name: "theme", url:""},
//     {name: "", url:""},
//     {name: "", url:""}
// ]

// }