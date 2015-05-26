'use strict';

var Model = require('./../models/nation');

var Nation = {
	/* Get all nations */
	getAllNations: function (req, res) {
		new Model.Nation()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a nation */
	getNation: function (req, res) {
		var nationId = req.params.id;
		new Model.Nation()
			.where('id', nationId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get all clubs in a nation */
	getAllClubsFromNation: function (req, res) {
		var nationId = req.params.id;
		new Model.Nation()
			.where('id', nationId)
			.fetch({withRelated: ['clubs']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a nation */
	createNation: function (req, res) {
		new Model.Nation(Model.create())
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
module.exports = Nation;
