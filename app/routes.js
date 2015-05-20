'use strict';
var index, auth;

index = require('./index');
auth = require('./auth');
//routes
var players = require('./routes/players');
var clubs = require('./routes/clubs');

module.exports = function routes(app) {
	app.get('/', index);
	//All "players" routes
	app.get('/api/v1/players', players.getAllPlayers);
	app.get('/api/v1/player/:id', players.getPlayer);
	//Simulation Routes
	app.post('/api/v1/player', players.createPlayer);

	//All "club" routes
	app.get('/api/v1/clubs', clubs.getAllClubs);
	app.get('/api/v1/clubs/:id', clubs.getClub);
	//Simulation Routes
	app.post('/api/v1/club', clubs.createClub);

	//Auth routes
	app.post('/auth', auth);
};
