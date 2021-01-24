//MENU HAMBURGUESA//

let navigationHambur = document.querySelector('.navigation-hambur');
let column = document.querySelector('.navigation-column');
navigationHambur.addEventListener('click', openMenu);
let flagMenu = true;

export function openMenu() {


    if (flagMenu) {
        column.style.height = "484px";
        navigationHambur.src = "./image/close.svg";

    }

    else {
        column.style.height = "0";
        navigationHambur.src = "./image/burger.svg";


    }

    flagMenu = !flagMenu;

}