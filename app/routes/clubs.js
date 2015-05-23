'use strict';

var Model = require('./../models/Club');

/* Get all clubs */
var getAllClubs = function (req, res) {
	new Model.Club().fetchAll()
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get a club */
var getClub = function (req, res) {
	var clubId = req.params.id;
	new Model.Club().where('id', clubId)
		.fetch()
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get all players in a club */
var getAllPlayersFromClub = function (req, res) {
	var clubId = req.params.id;
	new Model.Club().where('id', clubId)
		.fetch({withRelated: ['players']})
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Create a club */
var createClub = function (req, res) {
	new Model.Club(Model.create())
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
	getAllClubs: getAllClubs,
	getClub: getClub,
	getAllPlayersFromClub: getAllPlayersFromClub,
	createClub: createClub
};
