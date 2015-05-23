'use strict';

var Model = require('./../models/Player');

var Player = {
	/* Get all players */
	getAllPlayers: function (req, res) {
		new Model.Player().fetchAll()
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
		new Model.Player().where('id', playerId)
			.then(function (model) {
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
