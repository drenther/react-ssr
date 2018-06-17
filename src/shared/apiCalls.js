import axios from 'axios';

const baseUri = 'http://localhost:3002';

export const fetchAllMovies = () =>
  axios
    .get(`${baseUri}/movies`)
    .then(({ data }) => data)
    .catch(e => {
      console.log(e);
      return null;
    });

export const fetchMovieById = id =>
  axios
    .get(`${baseUri}/movie/${id}`)
    .then(({ data }) => data)
    .catch(e => {
      console.warn(e);
      return null;
    });
