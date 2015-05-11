'use strict';

var Players = require('../models/players');

module.exports = function index(req, res) {
	//res.send({ response: 'Hello Player!' });
  Players.forge()
  .fetch()
  .then(function (collection) {
    res.json({error: false, data: collection.toJSON()});
  })
	.otherwise(function (err) {
		res.status(500).json({error: true, data: {message: err.message}});
  });
};
