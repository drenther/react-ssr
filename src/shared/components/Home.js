import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';

const Home = ({ loading, data }) => (
  <div className="home container">{loading ? <Loading /> : <Table movies={data} />}</div>
);

const Table = ({ movies }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Movie</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>{movies.map(movie => <Row key={movie.id} {...movie} />)}</tbody>
  </table>
);

const Row = ({ id, title, rating }) => (
  <tr>
    <td>
      <Link to={`/movie/${id}`}>{title}</Link>
    </td>
    <td>{rating}</td>
  </tr>
);

export default Home;
