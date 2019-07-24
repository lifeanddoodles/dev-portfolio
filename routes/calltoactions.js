const data = require('../models/calltoactions');

module.exports = app => {
  app.get('/calltoactions-data', function(req, res) {
    res.send(data);
  });
};
