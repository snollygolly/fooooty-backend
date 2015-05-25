'use strict';

var Model = require('./../models/Player');

var Player = {
	/* Get all players */
	getAllPlayers: function (req, res) {
		new Model.Player()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a player */
	getPlayer: function (req, res) {
		var playerId = req.params.id;
		new Model.Player()
			.where('id', playerId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get all unsigned players that play a specific position*/
	getAllUnsignedPlayersFromPosition: function (req, res) {
		var position = req.params.pos;
		new Model.Player()
			.query('whereNull', 'club_id')
			.query('where', 'position', "=", position)
			.query('limit', '10')
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get all unsigned players */
	getAllUnsignedPlayers: function (req, res){
		new Model.Player()
			.query('whereNull', 'club_id')
			.query('limit', '10')
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a player with his club */
	getPlayerWithClub: function (req, res) {
		var playerId = req.params.id;
		new Model.Player()
			.where('id', playerId)
			.fetch({withRelated: ['club']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Join a club */
	joinClub: function (req, res) {
		var playerId = req.params.id;
		var clubId = parseInt(req.params.cid);
		new Model.Player()
			.where('id', playerId)
			.fetch()
			.then(function (model) {
				model.set('club_id', clubId);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Leave a club */
	leaveClub: function (req, res) {
		var playerId = req.params.id;
		var clubId = req.params.cid;
		new Model.Player()
			.where('id', playerId)
			.fetch()
			.then(function (model) {
				model.set('club_id', null);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Starts a player */
	startPlayer: function (req, res) {
		var playerId = req.params.id;
		new Model.Player()
			.where('id', playerId)
			.fetch()
			.then(function (model) {
				model.set('starting', true);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Benches (unstarts) a player */
	benchPlayer: function (req, res) {
		var playerId = req.params.id;
		new Model.Player()
			.where('id', playerId)
			.fetch()
			.then(function (model) {
				model.set('starting', false);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a player */
	createPlayer: function (req, res) {
		new Model.Player(Model.create())
			.save()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	}
};

/* Exports all the functions */
module.exports = Player;
