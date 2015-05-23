'use strict';

var Model = require('./../models/Nation');

/* Get all nations */
var getAllNations = function (req, res) {
	new Model.Nation().fetchAll()
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get a nation */
var getNation = function (req, res) {
	var nationId = req.params.id;
	new Model.Nation().where('id', nationId)
		.fetch()
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get all clubs in a nation */
var getAllClubsFromNation = function (req, res) {
	var nationId = req.params.id;
	new Model.Nation().where('id', nationId)
		.fetch({withRelated: ['clubs']})
		.then(function (model) {
			res.json(model);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Create a nation */
var createNation = function (req, res) {
	new Model.Nation(Model.create())
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
	getAllNations: getAllNations,
	getNation: getNation,
	getAllClubsFromNation: getAllClubsFromNation,
	createNation: createNation
};
