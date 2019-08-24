const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
// Support Gzip
app.use(compression());
// Support post requests with body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
require('./routes/projects')(app);
require('./routes/skills')(app);
require('./routes/calltoactions')(app);
require('./routes/send')(app);

app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// Error handling function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Red alert!: ${err.stack}`);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
