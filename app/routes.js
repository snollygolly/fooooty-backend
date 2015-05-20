'use strict';
var index, auth, players;

index = require('./index');
auth = require('./auth');
players = require('./routes/players');

module.exports = function routes(app) {
	app.get('/', index);
	//All "players" routes
	app.get('/api/v1/players', players.getAllPlayers);
	app.post('/api/v1/sim/player', players.createPlayer);
	app.get('/api/v1/player/:id', players.getPlayer);
	//Auth routes
	app.post('/auth', auth);
};
