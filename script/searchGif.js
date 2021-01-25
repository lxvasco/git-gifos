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



//CARGA GIFS

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
        let containerSearchGif = document.createElement("div");
        let containerGif = document.createElement("div");
        let searchGif = document.createElement("img");
        let backSearchGif = containerGif.cloneNode(true);
        let iconFav = document.createElement("img");
        let iconDownload = document.createElement("img");
        let iconMax = document.createElement("img");
        let titleSearchGif = document.createElement("h5");
       

        searchGif.src = resultado.images.original.url;
        searchGif.style.width = "156px";
        searchGif.style.height = "120px";

        containerSearchGif.style.position = "relative";
        containerSearchGif.padding = "0";
        containerSearchGif.style.margin = "0.5em";

        backSearchGif.style.backgroundColor = "rgba(87,46,229,0.5)"
        backSearchGif.style.width = "156px";
        backSearchGif.style.height = "120px";
        backSearchGif.style.position = "absolute";
        backSearchGif.style.display = "none";

        containerSearchGif.addEventListener("mouseover", function() {
            backSearchGif.style.display = "flex";
        });

        containerSearchGif.addEventListener("mouseout", function(){
            backSearchGif.style.display = "none";
        });

        styleIcon(iconFav,"../image/icon-fav.svg");
        hoverIcon(iconFav,"../image/icon-fav-hover.svg","../image/icon-fav.svg");

    
        styleIcon(iconDownload, "../image/icon-download.svg");
        hoverIcon(iconDownload,"../image/icon-download-hover.svg","../image/icon-download.svg");

        styleIcon(iconMax, "../image/icon-max-normal.svg");
        hoverIcon(iconMax,"../image/icon-max-hover.svg","../image/icon-max-normal.svg");

       

        titleSearchGif.innerHTML = resultado.title;
        titleSearchGif.style.alignSelf = "end";
        titleSearchGif.style.fontFamily = "Roboto";
        titleSearchGif.style.fontSize = "12px";
        titleSearchGif.style.color = "#FFFFFF";

        backSearchGif.appendChild(iconFav);
        backSearchGif.appendChild(iconMax);
        backSearchGif.appendChild(iconDownload);
        backSearchGif.appendChild(titleSearchGif);


        containerSearchGif.appendChild(containerGif);
        containerGif.appendChild(searchGif);
        containerSearchGif.appendChild(backSearchGif);
        containerSearchGif.appendChild(containerGif);
        containerSearch.appendChild(containerSearchGif);


    })


}

function hoverIcon(icon, srcHover, srcHoverOut){
    icon.addEventListener('mouseover', function(){
        icon.src = srcHover;

    });

    icon.addEventListener('mouseout', function(){
        icon.src = srcHoverOut;

    });

}

function styleIcon(icon, srcImage){
    icon.src = srcImage;
    icon.style.width = "25px";
    icon.style.height = "25px";
    icon.style.padding = "2px";
}




