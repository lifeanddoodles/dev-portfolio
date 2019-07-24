const data = require('../models/projects');

module.exports = app => {
  app.get('/projects-data', function(req, res) {
    res.send(data);
  });
};
