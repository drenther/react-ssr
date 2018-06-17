import Home from './components/Home';
import Post from './components/Post';

import { fetchAllMovies, fetchMovieById } from './apiCalls';

const routes = [
  {
    path: '/',
    exact: true,
    C: Home,
    getInitialData: () => fetchAllMovies(),
  },
  {
    path: '/movie/:id',
    C: Post,
    getInitialData: (path = '') => fetchMovieById(path.split('/').pop()),
  },
];

export default routes;
