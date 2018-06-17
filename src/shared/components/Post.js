import React from 'react';

const Post = ({ loading, data }) => (
  <div className="post">
    {loading ? (
      <div className="loader">Loading</div>
    ) : (
      <Fragment>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
      </Fragment>
    )}
  </div>
);

export default Post;
