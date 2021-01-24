import { connection } from './apiConexion.js'

export async function obtenerGifo() {

    let resultadoJson = await connection('trending', '12','');
    

    resultadoJson.data.map(resultado => {
        let trendingGif = document.createElement("img");
        trendingGif.src = resultado.images.original.url;
        trendingGif.style.paddingLeft = "1em";
        trendingGif.style.flexGrow="0";
        trendingGif.style.flexShrink="0";

        let containerTrending = document.querySelector(".trending-gifos-scroll");
        containerTrending.appendChild(trendingGif);

    })

}

obtenerGifo();


