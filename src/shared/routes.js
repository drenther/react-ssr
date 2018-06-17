import Home from './components/Home';
import Movie from './components/Movie';

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
    C: Movie,
    getInitialData: (path = '') => fetchMovieById(path.split('/').pop()),
  },
];

export default routes;
