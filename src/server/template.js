export default (data, markup, title) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
      <script>window.__SERIALIZED_DATA__ = ${JSON.stringify(data)}</script>
    </head>

    <body>
      <div id="app">${markup}</div>

      <script src="/bundle.js"></script>
    </body>
  </html>
`;
