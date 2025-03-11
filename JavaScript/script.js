const searchInput =  document.getElementById('search-input');

/*var pra ocultar o card */
const resultArtist =  document.getElementById('result-artist')

/*var para manipular as playlist pra aparecer */
const resultPlaylist =  document.getElementById('result-playlists');

/*Consumindo API FAKE */
function requestApi (searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch (url)
    .then ((response) => response.json())
    .then ((result) => displayResults(result))

}
function displayResults(result){
    resultPlaylist.classList.add ('hidden');
    const artistName = document.getElementById ('artist-name')
    const artistImage = document.getElementById ('artist-img')

    /*ele vai pegar o elemento de cada item - parte dinamica dos card, vai pegar o nome e a imagem de cada artist */
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    /*Mostrar o card */
    resultArtist.classList.remove('hidden');

}

/*evento*/ 
document.addEventListener('input' , function ()
 {
    const  searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '') {
        resultPlaylist.classList.add('hidden') /*mostrar a playlist*/
        resultArtist.classList.remove ('hidden') /*esconder a playlist*/
        return;
    }
    requestApi(searchTerm)

})