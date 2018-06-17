export default (data, markup) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>FavMovies - ${data.title ? data.title : 'Home'}</title>
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
      <script>window.__SERIALIZED_DATA__ = ${JSON.stringify(data)}</script>
    </head>

    <body>
      <div id="app">${markup}</div>

      <script src="/bundle.js"></script>
    </body>
  </html>
`;
