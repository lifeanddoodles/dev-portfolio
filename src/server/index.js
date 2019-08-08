const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
require('./routes/projects')(app);
require('./routes/skills')(app);
require('./routes/calltoactions')(app);
require('./routes/send')(app);

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  app.use(express.static('../../build'));

  //Express will serve up the index.html file
  //if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'build', 'index.html'));
  });
}
// Error handling function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Red alert!: ${err.stack}`);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
