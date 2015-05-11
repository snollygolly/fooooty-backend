'use strict';
var index, auth, players;

index = require('./index');
auth = require('./auth');
players = require('./routes/players');

module.exports = function routes(app) {
	app.get('/', index);
	app.get('/players', players.getAllPlayers);
	app.post('/auth', auth);
};
