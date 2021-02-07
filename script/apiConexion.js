const url = 'https://api.giphy.com/v1/gifs';
const apiKey = 'gjnniHAJVrtlKJMgr5ppKNeZtj4ePgQz';

export async function connection(ruta, limit, q , offset) {
    const endPoint = `${url}/${ruta}?api_key=${apiKey}&q=${q}&limit=${limit}&offset=${offset}`;
    let response = await fetch(endPoint);
    let responseJson = await response.json();
    return responseJson;
}
