'use strict';
var index, auth;

index = require('./index');
auth = require('./auth');
//routes
var players = require('./routes/players');
var clubs = require('./routes/clubs');
var nations = require('./routes/nations');

module.exports = function routes(app) {
	app.get('/', index);
	//All "players" routes
	app.get('/api/v1/players', players.getAllPlayers);
	app.get('/api/v1/players/:id', players.getPlayer);
	//Simulation Routes
	app.post('/api/v1/players', players.createPlayer);

	//All "club" routes
	app.get('/api/v1/clubs', clubs.getAllClubs);
	app.get('/api/v1/clubs/:id', clubs.getClub);
	app.get('/api/v1/clubs/:id/players', clubs.getAllPlayersFromClub);
	//Simulation Routes
	app.post('/api/v1/clubs', clubs.createClub);

	//All "nation" routes
	app.get('/api/v1/nations', nations.getAllNations);
	app.get('/api/v1/nations/:id', nations.getNation);
	app.get('/api/v1/nations/:id/clubs', nations.getAllClubsFromNation);
	//Simulation Routes
	app.post('/api/v1/nations', nations.createNation);

	//Auth routes
	app.post('/auth', auth);
};
