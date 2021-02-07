import { connection } from './apiConexion.js'

const searchBar = document.querySelector('.header-search-text');
const displaySearch = document.querySelector('.trending-search');
let containerSearch = document.querySelector(".trending-search-answer");
let containerListAutocomplete = document.querySelector('.header-container-list');
let iconSearch = document.querySelector('.header-search-img');
let iconSearchHidden = document.querySelector('.header-search-img-hidden');

//EVENTOS//

export function searchBarSearh() {
    iconSearch.addEventListener('click', captureValue);
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


export function captureValue() {
    let value = searchBar.value;
    searchGifo(value);
    displaySearch.style.display = "block";
    iconSearchHidden.style.display = "none";

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


    let searchJson = await connection('search', 12, name);

    containerSearch.innerHTML = '';

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
        titleSearchGif.innerHTML = resultado.title;

        searchGif.className = "trending-search-answer-gif"
        containerSearchGif.className="trending-search-answer-container"        
        backSearchGif.className="trending-search-answer-back"
        titleSearchGif.className="trending-search-answer-title"
        
        styleIcon(iconFav, "../image/icon-fav.svg");
        hoverIcon(iconFav, "../image/icon-fav-hover.svg", "../image/icon-fav.svg");


        styleIcon(iconDownload, "../image/icon-download.svg");
        hoverIcon(iconDownload, "../image/icon-download-hover.svg", "../image/icon-download.svg");

        styleIcon(iconMax, "../image/icon-max-normal.svg");
        hoverIcon(iconMax, "../image/icon-max-hover.svg", "../image/icon-max-normal.svg");      
        

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

export function hoverIcon(icon, srcHover, srcHoverOut) {
    icon.addEventListener('mouseover', function () {
        icon.src = srcHover;

    });

    icon.addEventListener('mouseout', function () {
        icon.src = srcHoverOut;

    });

}

export function styleIcon(icon, srcImage) {
    icon.src = srcImage;
    icon.style.width = "40px";
    icon.style.height = "40px";
    icon.style.padding = "2px";
}




