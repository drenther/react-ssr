import React, { Fragment } from 'react';

import Loading from './Loading';

const Post = ({ loading, data }) => (
  <div className="post">
    {loading ? (
      <Loading />
    ) : (
      <Fragment>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
      </Fragment>
    )}
  </div>
);

export default Post;
