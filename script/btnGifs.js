import { connection } from './apiConexion.js';

let containerMaxGif=document.querySelector('.containerMaxGif-main-gif');
let maxGifTitle=document.querySelector('.containerMaxGif-text');
let container=document.querySelector('.containerMaxGif');
let btnClose=document.querySelector('.containerMaxGif-close');

export async function openGif(event){
    
    let id=event.originalTarget.parentNode.lastChild.innerText;
    container.style.display="flex"; 

    console.log(event);

    let searchJson = await connection(id);   

    let maxGif= document.createElement('img');    
    maxGif.src=await searchJson.data.images.original.url;
    maxGifTitle.innerText=await searchJson.data.title;
    containerMaxGif.appendChild(maxGif);    
    
    closeMaxGif();

}

function closeMaxGif(){
    btnClose.addEventListener('click',()=>{
        container.style.display="none";  
        containerMaxGif.innerHTML="";
    });
}