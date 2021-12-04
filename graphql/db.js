// < Integrate my server and an url > 
// refer to restapi.txt

import fetch from "node-fetch"; // code: 'ERR_REQUIRE_ESM' -> ($ npm uninstall node-fetch) $ npm install node-fetch@2.6.1
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    // Before filtering
    // return fetch(`${API_URL}`)
    //     .then(res => res.json())
    //     .then(json => json.data.movies)

    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies)
};