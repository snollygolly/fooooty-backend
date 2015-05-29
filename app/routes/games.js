'use strict';

var Model = require('./../models/game');
var utility = require('../helpers/utility');

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
	kickoffGame: function (req, res) {
		var gameId = req.params.id;
		new Model.Game()
			.where('id', gameId)
			.fetch()
			.then(function (model) {
				model = simulateGame(model);
				// model.set('home_score', model.home_score);
				// model.set('away_score', model.away_score);
				// model.set('winner_club_id', model.winner_club_id);
				// model.set('loser_club_id', model.loser_club_id);
				// model.set('status', model.status);
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

function simulateGame(game){
	if (utility.getRandomInt(1,2) === 1){
		//home wins
		game.set('home_score', 1);
		game.set('away_score', 0);
		game.set('winner_club_id', game.get('home_club_id'));
		game.set('loser_club_id', game.get('away_club_id'));
	}else{
		//away wins
		game.set('home_score', 0);
		game.set('away_score', 1);
		game.set('winner_club_id', game.get('away_club_id'));
		game.set('loser_club_id', game.get('home_club_id'));
	}
	game.set('status', "ENDED");
	game.set('game', generateGameJSON(game));
	return game;
}

function generateGameJSON(game){
	var returnObj = {};
	returnObj.recap = [];
	returnObj.recap.push("Game has been simulated!");
	return JSON.stringify(returnObj);
}


/* Exports all the functions */
module.exports = Game;
