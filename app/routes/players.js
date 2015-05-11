'use strict';

var Model = require('./../models/Player');

/* Get all players */
var getAllPlayers = function (req, res) {
	new Model.Player().fetchAll()
		.then(function (players) {
			res.json(players);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get a player */
var getPlayer = function (req, res) {
	var playerId = req.params.id;
	new Model.Player().where('id', playerId)
		.fetch()
		.then(function (player) {
			res.json(player);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Exports all methods */
module.exports = {
	getAllPlayers: getAllPlayers,
	getPlayer: getPlayer
};
