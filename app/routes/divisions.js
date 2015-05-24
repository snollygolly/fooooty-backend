'use strict';

var Model = require('./../models/Division');

var Division = {
	/* Get all divisions */
	getAllDivisions: function (req, res) {
		new Model.Division()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a division */
	getDivision: function (req, res) {
		var divisionId = req.params.id;
		new Model.Division()
			.where('id', divisionId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Gets all clubs from a division */
	getAllClubsFromDivision: function(req, res) {
		var divisionId = req.params.id;
		new Model.Division()
			.where('id', divisionId)
			.fetch({withRelated: ['clubs']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a division */
	createDivision: function (req, res) {
		new Model.Division(Model.create())
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
module.exports = Division;
