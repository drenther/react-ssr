import axios from 'axios';

const baseUri = 'http://localhost:3002';

export const fetchAllPosts = () =>
  axios
    .get(`${baseUri}/posts`)
    .then(({ data }) => data)
    .catch(e => {
      console.log(e);
      return null;
    });

export const fetchPostById = id =>
  axios
    .get(`${baseUri}/post/${id}`)
    .then(({ data }) => data)
    .catch(e => {
      console.warn(e);
      return null;
    });
