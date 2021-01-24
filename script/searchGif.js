import { connection } from './apiConexion.js'

const searchBar = document.querySelector('.header-search-text');
const search = document.querySelector('.header-search-img');
const displaySearch = document.querySelector('.trending-search');
const seeMore = document.querySelector('.header-btn');
let containerSearch = document.querySelector(".trending-search-answer");
const containerSearchBar = document.querySelector('.header-container');
let containerListAutocomplete = document.querySelector('.header-container-list');
let iconSearch = document.querySelector('.header-search-img');

//EVENTOS//

export function searchBarTyping() {
    searchBar.addEventListener('keyup', autocomplete);

}

export function searchBarSearh() {
    search.addEventListener('click', captureValue);
    searchBar.addEventListener('keyup', function (enter) {
        if (enter.keyCode === 13) {
            captureValue();
        }
    })

}

export function closeSearch() {
    iconSearch.addEventListener('click', deleteSearch);
}




//CALLBACK//

export async function autocomplete(event) {

    let key = event.originalTarget.value;
    containerListAutocomplete.innerHTML = "";
    iconSearch.src = "./image/close.svg";



    let autocompleteJson = await connection('search/tags', 4, key);
    autocompleteJson.data.map(responseAutocomplete => {

        let autoWord = document.createElement("p");
        autoWord.innerHTML = responseAutocomplete.name;
        containerSearchBar.style.height = "150px";
        containerListAutocomplete.style.borderTop = "1px solid rgba(156,175,195,0.5) ";
        containerListAutocomplete.appendChild(autoWord);

        autoWord.addEventListener('click', function changeValue() {

            searchBar.value = autoWord.innerHTML;
            captureValue();
        })


    })

}


function captureValue() {
    let value = searchBar.value;
    searchGifo(value);
    displaySearch.style.display = "block";

}

function deleteSearch() {
    searchBar.value = "";
    iconSearch.src = "./image/icon-search.svg";
    containerListAutocomplete.style.borderTop = "0";
}



//CARGAS GIFS

export async function searchGifo(name, limit) {

    let searchTittle = document.querySelector('.trending-search-title');
    searchTittle.innerHTML = (name);
    searchTittle.style.textTransform = "capitalize";
    containerListAutocomplete.innerHTML = "";

    limit = 12;

    let searchJson = await connection('search', limit, name);

    containerSearch.innerHTML = '';
    containerSearchBar.style.height = "50px";
    console.log(searchJson);

    searchJson.data.map(resultado => {
        let searchGif = document.createElement("img");

        searchGif.src = resultado.images.original.url;
        searchGif.style.padding = "1em";
        searchGif.style.width = "156px";
        searchGif.style.height = "120px";

        containerSearch.appendChild(searchGif);


    })


}






