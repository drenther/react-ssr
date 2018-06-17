import express from 'express';
import cors from 'cors';
import React from 'react';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';

import App from '../shared/App';

import routes from '../shared/routes';
import template from './template';

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const activeRoute = routes.find(path => matchPath(req.path, path)) || {};

  const apiResponse = activeRoute.getInitialData(req.path);

  apiResponse
    .then(data => {
      const markup = renderToString(
        <StaticRouter location={req.url} context={{ data }}>
          <App />
        </StaticRouter>
      );
      const title = Helmet.renderStatic();

      res.send(template(data, markup, title));
    })
    .catch(next);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
