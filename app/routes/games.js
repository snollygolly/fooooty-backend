'use strict';

var Model = require('./../models/game');

var Game = {
	/* Get all games */
	getAllGames: function (req, res) {
		new Model.Game()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a game */
	getGame: function (req, res) {
		var gameId = req.params.id;
		new Model.Game()
			.where('id', gameId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a game */
	createGame: function (req, res) {
		new Model.Game(Model.create())
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
module.exports = Game;
