import { openMenu } from "./menu.js"
import { switchTheme } from "./darkMode.js"
import { obtenerGifo } from "./trendings.js"
import { searchGifo } from "./searchGif.js"
import { searchBarTyping } from "./autocomplete.js"
import { searchBarSearh } from "./searchGif.js"
import { closeSearch } from "./searchGif.js";
import { seeMoreClick } from "./seeMore.js";



function main() {

    searchBarTyping();
    searchBarSearh();
    closeSearch();
    seeMoreClick();
   
}

main();





