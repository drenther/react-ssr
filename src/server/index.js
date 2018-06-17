import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';

import App from '../shared/App';

import routes from '../shared/routes';

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const activeRoute = routes.find(path => matchPath(req.path, path)) || {};

  const apiResponse = activeRoute.getInitialData ? activeRoute.getInitialData(req.path) : Promise.resolve();

  apiResponse
    .then(data => {
      console.log(data);
      const markup = renderToString(
        <StaticRouter location={req.url} context={data}>
          <App />
        </StaticRouter>
      );

      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Home</title>
          <link type="text/css" rel="stylesheet" href="http://localhost:3000/styles.css">
          <script>window.__SERIALIZED_DATA__ = ${JSON.stringify(data)}</script>
        </head>
  
        <body>
          <div id="app">${markup}</div>
  
          <script src="/bundle.js"></script>
        </body>
      </html>
    `);
    })
    .catch(next);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
