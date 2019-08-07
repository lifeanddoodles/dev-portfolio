import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));
// app.use(express.static('./build'));

app.get('/*', (req, res) => {
  // console.log(req);
  // const indexFile = path.resolve(__dirname, 'build', 'index.html');
  // fs.readFile(indexFile, 'utf8', (err, data) => {
  //   if (err) {
  //     console.error('Something went wrong:', err);
  //     return res.status(500).send('Oops, better luck next time!');
  //   }

  //   return res.send(
  //     data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
  //   );
  // });
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err);
      return res.status(404).end();
    }
    const context = {};
    const markup = ReactDOMServer.renderToString(<App />);

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      const RenderedApp = htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${markup}</div>`
      );
      res.send(RenderedApp);
    }
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
