export const getGifs = async ( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=HOZr42vJ2MGS5JsGQdwfpxfh26xeDf9a`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    const dataGifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })

    console.log(dataGifs);
    return dataGifs;
}