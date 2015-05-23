'use strict';

var Model = require('./../models/Club');

var Club = {
	/* Get all clubs */
	getAllClubs: function (req, res) {
		new Model.Club().fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a club */
	getClub: function (req, res) {
		var clubId = req.params.id;
		new Model.Club().where('id', clubId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get all players in a club */
	getAllPlayersFromClub: function (req, res) {
		var clubId = req.params.id;
		new Model.Club().where('id', clubId)
			.fetch({withRelated: ['players']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},
	
	/* Create a club */
	createClub: function (req, res) {
		new Model.Club(Model.create())
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
module.exports = Club;
