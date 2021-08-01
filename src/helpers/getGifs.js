export const getGifts = async (category) => {

    const api_key = 'AEM93pDB4wa3GRu0m69ZWX4AlpWcKBsA';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=${api_key}`;
    const resp = await fetch( url );
    const data = await resp.json();

    const gifs = data.data.map(img => {
        return {
            id: img.id,
            title: img.title,
            image: img.images?.original.url
        }
    });

    return gifs;
}