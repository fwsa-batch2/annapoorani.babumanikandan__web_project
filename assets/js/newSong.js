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

    for (let i=0;i<movieListInParse.length;i++) 
    {

        let moviePosters = movieListInParse[i].moviePoster;
        let movieNames = movieListInParse[i].movieName;
        let artistName = movieListInParse[i].artistName;
        let artistImg = movieListInParse[i].artistImg;
        let song = movieListInParse[i].songs;

        songs += ` <div class='div1'>
            <span class='span1'>
                
                <br><br>
                <img id='abi' src='${moviePosters}' alt='${movieNames}'></span>
    
            <div class='artist'>
                <span><h1>Artists</h1></span>
                <span ><img src='${artistImg}' alt='${artistName}' class='artistImg'> <p class='artistName'>${artistName}</p></span>
                <span ><img src='' alt='' class=artistImg> <p class=artistName></p></span>
              
            </div>
            <div class='div2'><ul id='myUl'>
            <li>${song} </li><br>
            <li><audio controls>
                <source src='${song}' type='audio/mpeg'>
            </audio><br><br>
            </li></ul>
            <li>${song} </li><br>
            <li><audio controls>
            <source src='${song}' type='audio/mpeg'>
        </audio><br><br>
        </li></ul>
        <li>${song} </li><br>
        <li><audio controls>
        <source src='${song}' type='audio/mpeg'>
    </audio><br><br>
    </li></ul></div>`

    }

    let movieSongs = document.getElementById("mainContent");
    console.log(movieSongs);

    movieSongs.innerHTML = songs;
    console.log(movieSongs);

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