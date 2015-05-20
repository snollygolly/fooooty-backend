'use strict';

var Model = require('./../models/Player');

/* Get all players */
var getAllPlayers = function (req, res) {
	new Model.Player().fetchAll()
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get a player */
var getPlayer = function (req, res) {
	var playerId = req.params.id;
	new Model.Player().where('id', playerId)
		.fetch({withRelated: ['club']})
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Create a player */
var createPlayer = function (req, res) {
	new Model.Player(Model.obj)
		.save()
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Exports all methods */
module.exports = {
	getAllPlayers: getAllPlayers,
	getPlayer: getPlayer,
	createPlayer: createPlayer
};
