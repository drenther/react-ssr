import React, { Component } from 'react';

const Home = ({ loading, data: posts }) => (
  <div className="home">
    {loading ? (
      <div className="loader">Loading</div>
    ) : (
      <div className="posts">{posts.map(post => <h3 key={post.id}>{post.title}</h3>)}</div>
    )}
  </div>
);

export default Home;
