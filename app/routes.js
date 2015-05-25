'use strict';
var index, auth;

index = require('./index');
auth = require('./auth');
//routes
var players = require('./routes/players');
var clubs = require('./routes/clubs');
var nations = require('./routes/nations');
var divisions = require('./routes/divisions');
var stadiums = require('./routes/stadiums');

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
	app.get('/api/v1/clubs/:id/players/starting', clubs.getAllStartingPlayersFromClub);
	app.get('/api/v1/clubs/:id/players/benched', clubs.getAllBenchedPlayersFromClub);
	app.get('/api/v1/clubs/:id/players', clubs.getAllPlayersFromClub);
	app.put('/api/v1/clubs/:id/divisions/:did', clubs.joinDivision);
	app.delete('/api/v1/clubs/:id/divisions/:did', clubs.leaveDivision);
	//Creation Routes
	app.post('/api/v1/clubs', clubs.createClub);

	//All "division" routes
	app.get('/api/v1/divisions', divisions.getAllDivisions);
	app.get('/api/v1/divisions/:id', divisions.getDivision);
	app.get('/api/v1/divisions/:id/clubs', divisions.getAllClubsFromDivision);
	app.put('/api/v1/divisions/:id/nations/:nid', divisions.joinNation);
	app.delete('/api/v1/divisions/:id/nations/:nid', divisions.leaveNation);
	//Creation Routes
	app.post('/api/v1/divisions', divisions.createDivision);

	//All "nation" routes
	app.get('/api/v1/nations', nations.getAllNations);
	app.get('/api/v1/nations/:id', nations.getNation);
	app.get('/api/v1/nations/:id/clubs', nations.getAllClubsFromNation);
	//Creation Routes
	app.post('/api/v1/nations', nations.createNation);

	//All "stadium" routes
	app.get('/api/v1/stadiums', stadiums.getAllStadiums);
	app.get('/api/v1/stadiums/:id', stadiums.getStadium);
	app.get('/api/v1/stadiums/:id/clubs', stadiums.getAllClubsFromStadium);
	app.put('/api/v1/stadiums/:id/nations/:nid', stadiums.joinNation);
	app.delete('/api/v1/stadiums/:id/nations/:nid', stadiums.leaveNation);
	//Creation Routes
	app.post('/api/v1/stadiums', stadiums.createStadium);

	//Auth routes
	app.post('/auth', auth);
};
