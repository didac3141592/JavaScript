
const URL = "https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json";

const getMovie = async (wordCount) => {
    let words;
    let movie;
    const RAW_DATA = await fetch(URL);
    const DATA = await (RAW_DATA.text());
    const LIST = await JSON.parse(DATA);
    if(!wordCount) {
        const INDEX = Math.floor((Math.random() * 100));
        return movie = LIST[INDEX]["title"];
    }
    do {
        const INDEX = Math.floor((Math.random() * 100));
        movie = LIST[INDEX]["title"];
        words = movie.split(" ");
    } while (words.length != wordCount)
    return movie;
};

