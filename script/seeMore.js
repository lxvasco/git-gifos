import { connection } from './apiConexion.js';
import { styleIcon } from './searchGif.js';
import { hoverIcon } from './searchGif.js';
import { openGif } from './btnGifs.js';

const seeMore = document.querySelector('.header-btn-more');
const searchBar = document.querySelector('.header-search-text');
let containerSearch = document.querySelector(".trending-search-answer");
let countSeeMore = 0;
let idGif;
let iconDownload;
let iconMax;
let iconFav;
let titleSearchGif;

//EVENTOS//

export function seeMoreClick() {
    seeMore.addEventListener('click', seeMoreGifs);
};

function iconMaxClick() {
    iconMax.addEventListener('click', openGif);
}

//CALLBACK

async function seeMoreGifs(name, limit, offset) {
    console.log("ver mas gifs");

    name = searchBar.value;
    countSeeMore = countSeeMore + 1;
    offset = countSeeMore * 12;

    let searchJson = await connection('search', 12, name, offset);

    console.log(searchJson);

    searchJson.data.map(resultado => {
        let containerSearchGif = document.createElement("div");
        let containerGif = document.createElement("div");
        let searchGif = document.createElement("img");
        let backSearchGif = containerGif.cloneNode(true);
        iconFav = document.createElement("img");
        iconDownload = document.createElement("img");
        iconMax = document.createElement("img");
        titleSearchGif = document.createElement("h5");
        idGif = document.createElement('p');

        searchGif.src = resultado.images.original.url;
        titleSearchGif.innerHTML = resultado.title;
        idGif.innerText = resultado.id;
        idGif.style.display="none";

        searchGif.className = "trending-search-answer-gif"
        containerSearchGif.className = "trending-search-answer-container"
        backSearchGif.className = "trending-search-answer-back"
        titleSearchGif.className = "trending-search-answer-title"

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
        backSearchGif.appendChild(idGif);

        containerSearchGif.appendChild(containerGif);
        containerGif.appendChild(searchGif);
        containerSearchGif.appendChild(backSearchGif);
        containerSearchGif.appendChild(containerGif);
        containerSearch.appendChild(containerSearchGif);

        iconMaxClick();


    });

    
};