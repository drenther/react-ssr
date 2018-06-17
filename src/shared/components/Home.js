import React from 'react';

import Loading from './Loading';

const Home = ({ loading, data: posts }) => (
  <div className="home">
    {loading ? <Loading /> : <div className="posts">{posts.map(post => <h3 key={post.id}>{post.title}</h3>)}</div>}
  </div>
);

export default Home;
