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

	/* Join home club */
	joinGameAsHomeClub: function (req, res) {
		var gameId = req.params.id;
		var clubId = parseInt(req.params.cid);
		new Model.Game()
			.where('id', gameId)
			.fetch()
			.then(function (model) {
				model.set('home_club_id', clubId);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Join away club */
	joinGameAsAwayClub: function (req, res) {
		var gameId = req.params.id;
		var clubId = parseInt(req.params.cid);
		new Model.Game()
			.where('id', gameId)
			.fetch()
			.then(function (model) {
				model.set('away_club_id', clubId);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Schedule a game for a day */
	scheduleGameForDay: function (req, res) {
		var gameId = req.params.id;
		var dayId = parseInt(req.params.did);
		new Model.Game()
			.where('id', gameId)
			.fetch()
			.then(function (model) {
				model.set('day_id', dayId);
				model.set('status', "SCHEDULED");
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Kickoff a game simulation */
	simulateGame: function (req, res) {
		var gameId = req.params.id;
		new Model.Game()
			.where('id', gameId)
			.fetch()
			.then(function (model) {
				model.set('away_club_id', clubId);
				model.save();
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

function

function generateGameJSON(game){
	var returnObj = {};
	returnObj.recap = [];
	returnObj.recap.push("Game has been simulated!");
}


/* Exports all the functions */
module.exports = Game;
