import { openMenu } from "./menu.js"
import { switchTheme } from "./darkMode.js"
import { obtenerGifo } from "./trendings.js"
import { searchGifo } from "./searchGif.js"
import { searchBarTyping } from "./searchGif.js"
import { searchBarSearh } from "./searchGif.js"
import { closeSearch } from "./searchGif.js";



function main() {

    searchBarTyping();
    searchBarSearh();
    closeSearch();
    ;
}

main();



//MEDIA QUERY//

let mediaquery = window.matchMedia("(min-width: 930px)");


if (mediaquery.matches) {

    document.querySelector('.header-title-text').innerHTML = ("Inspírate, busca, guarda, y crea <br> los mejores <span style='color:#50E3C2'>GIFOS</span>");
    document.querySelector('.trending-text').innerHTML = ("Reactions, Entertainment,Sports, Stickers, Artists");
    document.querySelector('.trending-gifos-text').innerHTML = ("Mira los últimos GIFOS de nuestra comunidad.");



}

