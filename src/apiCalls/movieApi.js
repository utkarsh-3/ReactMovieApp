import { ResponseCheck,ErrorCheck } from "./checkApi";
let url=process.env.REACT_APP_API_URL+"/movies/";

export function saveMovie(place) {
    return fetch(url +  "", {
      method:  "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...place
      }),
    })
      .then(ResponseCheck)
      .catch(ErrorCheck);
  }

export function getMovies(){
    return fetch(url).then(ResponseCheck).catch(ErrorCheck);
}

export function deleteMovie(movieId) {
    return fetch("http://localhost:3001/movies/" + movieId, {
      method: "DELETE",
    })
      .then(ResponseCheck)
      .catch(ErrorCheck);
  }