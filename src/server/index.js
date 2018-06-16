import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../shared/App';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const markup = renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Home</title>
        <link type="text/css" rel="stylesheet" href="styles.css">
      </head>

      <body>
        <div id="app">${markup}</div>

        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
