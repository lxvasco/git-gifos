import { connection } from './apiConexion.js'
import { captureValue } from './searchGif.js'

let containerListAutocomplete = document.querySelector('.header-container-list');
const searchBar = document.querySelector('.header-search-text');
let iconSearch = document.querySelector('.header-search-img');
let iconSearchHidden = document.querySelector('.header-search-img-hidden');

//EVENTOS

export function searchBarTyping() {
    searchBar.addEventListener('keyup', autocomplete);
}

//CALLBACK

async function autocomplete(event) {
    containerListAutocomplete.innerHTML = "";
    let key = event.originalTarget.value;    
    iconSearch.src = "./image/close.svg";
    iconSearchHidden.style.display="block";



    let autocompleteJson = await connection('search/tags', 4, key);
    autocompleteJson.data.map(responseAutocomplete => {

        let containerAutoword = document.createElement("div");
        let iconAutoword=document.createElement("img");
        let autoWord = document.createElement("p");

        iconAutoword.src="../image/icon-search.svg";
        iconAutoword.style.width="15px";
        autoWord.innerHTML = responseAutocomplete.name;

        containerAutoword.appendChild(iconAutoword);
        containerAutoword.appendChild(autoWord);
        containerAutoword.style.display="flex";

        containerListAutocomplete.style.borderTop = "1px solid rgba(156,175,195,0.5) ";
        containerListAutocomplete.appendChild(containerAutoword);

        autoWord.addEventListener('click', function changeValue() {
            searchBar.value = autoWord.innerHTML;
            captureValue();
        });


    });

};