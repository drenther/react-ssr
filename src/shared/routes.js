import Home from './components/Home';
import Post from './components/Post';

import { fetchAllPosts, fetchPostById } from './apiCalls';

const routes = [
  {
    path: '/',
    exact: true,
    C: Home,
    getInitialData: () => fetchAllPosts(),
  },
  {
    path: '/posts/:id',
    C: Post,
    getInitialData: (path = '') => fetchPostById(path.split('/').pop()),
  },
];

export default routes;
