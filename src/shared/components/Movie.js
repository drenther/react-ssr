import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';

const Movie = ({ loading, data }) => (
  <div className="post container">
    {loading ? (
      <Loading />
    ) : (
      <div className="card">
        <div className="card-header">
          <div className="card-title h5">{data.title}</div>
          <div className="card-subtitle text-gray">IMDB Rating - {data.rating}</div>
        </div>
        <div className="card-body">{data.plot}</div>
        <div className="card-footer">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )}
  </div>
);

export default Movie;
