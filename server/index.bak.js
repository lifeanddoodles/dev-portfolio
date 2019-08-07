import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
// const bodyParser = require('body-parser');
import ReactDOMServer from 'react-dom/server';

import App from '../App';

// const port = process.env.PORT || 5000;
const port = process.env.PORT || 3006;
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// require('../routes/projects')(app);
// require('../routes/skills')(app);
// require('../routes/calltoactions')(app);
// require('../routes/send')(app);

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3006/'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// if (process.env.NODE_ENV === 'production') {
// Express will serve up production assets
// app.use(express.static('client/build'));
app.use(express.static('./build'));

// Express will serve up the index.html file
// if it doesn't recognize the route
// const path = require('path');
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('build', 'index.html');
  // const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});
// }

// app.listen(port, () => console.log(`Server started on port ${port}`));
app.listen(port, () => {
  console.log(`😎 Server is listening on port ${port}`);
});
