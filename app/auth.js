'use strict';
var config, jwt;

config = require('../config/app');
jwt = require('jsonwebtoken');

module.exports = function auth(req, res) {
	res.send({
		token: jwt.sign(
			{ user: 'user' },
			config.JWT_SECRET
		)
	});
};
