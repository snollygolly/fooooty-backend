'use strict';

var Model = require('./../models/Stadium');

var Stadium = {
	/* Get all stadiums */
	getAllStadiums: function (req, res) {
		new Model.Stadium()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a stadium */
	getStadium: function (req, res) {
		var stadiumId = req.params.id;
		new Model.Stadium()
			.where('id', stadiumId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Gets all clubs from a stadium */
	getAllClubsFromStadium: function(req, res) {
		var stadiumId = req.params.id;
		new Model.Stadium()
			.where('id', stadiumId)
			.fetch({withRelated: ['clubs']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Join a nation */
	joinNation: function (req, res) {
		var stadiumId = req.params.id;
		var nationId = parseInt(req.params.nid);
		new Model.Stadium()
			.where('id', stadiumId)
			.fetch()
			.then(function (model) {
				model.set('nation_id', nationId);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Leave a nation */
	leaveNation: function (req, res) {
		var stadiumId = req.params.id;
		var nationId = parseInt(req.params.nid);
		new Model.Stadium()
			.where('id', stadiumId)
			.fetch()
			.then(function (model) {
				model.set('nation_id', null);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a stadium */
	createStadium: function (req, res) {
		console.log(Model.create());
		new Model.Stadium(Model.create())
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
module.exports = Stadium;
