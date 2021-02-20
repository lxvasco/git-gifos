import { connection } from './apiConexion.js';

let containerMaxGif = document.querySelector('.containerMaxGif-main-gif');
let maxGifTitle = document.querySelector('.containerMaxGif-text');
let container = document.querySelector('.containerMaxGif');
let btnClose = document.querySelector('.containerMaxGif-close');

export async function openGif(event) {

    let id = event.originalTarget.parentNode.lastChild.innerText;
    container.style.display = "flex";

    console.log(event);

    let searchJson = await connection(id);

    let maxGif = document.createElement('img');
    maxGif.src = await searchJson.data.images.original.url;
    maxGifTitle.innerText = await searchJson.data.title;
    containerMaxGif.appendChild(maxGif);

    closeMaxGif();

}

function closeMaxGif() {
    btnClose.addEventListener('click', () => {
        container.style.display = "none";
        containerMaxGif.innerHTML = "";
    });
}

export async function downloadGif(event) {

    let url;
    console.log(event);
    url = event.target.parentElement.src;
    let request = await fetch(url);
    console.log(request);
    let requestBlob = await request.blob();
    console.log(requestBlob);
    let urlGif=URL.createObjectURL(requestBlob);
    let link = document.createElement('a');
    link.href=urlGif;
    link.download="downloadGif.gif";
    link.style.display="none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}