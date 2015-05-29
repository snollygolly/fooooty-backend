'use strict';

var Model = require('./../models/day');

var Day = {
	/* Get all days */
	getAllDays: function (req, res) {
		new Model.Day()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a day */
	getDay: function (req, res) {
		var dayId = req.params.id;
		new Model.Day()
			.where('id', dayId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a day */
	createDay: function (req, res) {
		new Model.Day(Model.create())
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
module.exports = Day;
