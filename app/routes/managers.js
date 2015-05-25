'use strict';

var Model = require('./../models/Manager');

var Manager = {
	/* Get all managers */
	getAllManagers: function (req, res) {
		new Model.Manager()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a manager */
	getManager: function (req, res) {
		var managerId = req.params.id;
		new Model.Manager()
			.where('id', managerId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a manager with his club */
	getManagerWithClub: function (req, res) {
		var managerId = req.params.id;
		new Model.Manager()
			.where('id', managerId)
			.fetch({withRelated: ['club']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a manager */
	createManager: function (req, res) {
		new Model.Manager(Model.create())
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
module.exports = Manager;
