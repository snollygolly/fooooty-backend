'use strict';

var Model = require('./../models/bot');

var Bot = {
	/* Get all bots */
	getAllBots: function (req, res) {
		new Model.Bot()
			.fetchAll()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get a bot */
	getBot: function (req, res) {
		var botId = req.params.id;
		new Model.Bot()
			.where('id', botId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get all players in a bot */
	getAllClubsFromBot: function (req, res) {
		var botId = req.params.id;
		new Model.Bot()
			.where('id', botId)
			.fetch({withRelated: ['clubs']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Create a bot */
	createBot: function (req, res) {
		new Model.Bot(Model.create())
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
module.exports = Bot;
