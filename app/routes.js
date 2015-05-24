'use strict';
var index, auth;

index = require('./index');
auth = require('./auth');
//routes
var players = require('./routes/players');
var clubs = require('./routes/clubs');
var nations = require('./routes/nations');
var divisions = require('./routes/divisions');

module.exports = function routes(app) {
	app.get('/', index);
	//All "players" routes
	app.get('/api/v1/players', players.getAllPlayers);
	app.get('/api/v1/players/available', players.getAllUnsignedPlayers);
	app.get('/api/v1/players/:id', players.getPlayer);
	app.get('/api/v1/players/:id/clubs', players.getPlayerWithClub);
	app.put('/api/v1/players/:id/clubs/:cid', players.joinClub);
	app.delete('/api/v1/players/:id/clubs/:cid', players.leaveClub);
	//Creation route
	app.post('/api/v1/players', players.createPlayer);

	//All "club" routes
	app.get('/api/v1/clubs', clubs.getAllClubs);
	app.get('/api/v1/clubs/:id', clubs.getClub);
	app.get('/api/v1/clubs/:id/players', clubs.getAllPlayersFromClub);
	//Creation Routes
	app.post('/api/v1/clubs', clubs.createClub);

	//All "nation" routes
	app.get('/api/v1/nations', nations.getAllNations);
	app.get('/api/v1/nations/:id', nations.getNation);
	app.get('/api/v1/nations/:id/clubs', nations.getAllClubsFromNation);
	//Creation Routes
	app.post('/api/v1/nations', nations.createNation);

	//All "division" routes
	app.get('/api/v1/divisions', divisions.getAllDivisions);
	app.get('/api/v1/divisions/:id', divisions.getDivision);
	app.get('/api/v1/divisions/:id/clubs', divisions.getAllClubsFromDivision);
	//Creation Routes
	app.post('/api/v1/divisions', divisions.createDivision);

	//Auth routes
	app.post('/auth', auth);
};
