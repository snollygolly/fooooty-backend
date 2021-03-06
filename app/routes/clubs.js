'use strict';

var Model = require('./../models/club');

var Club = {
	/* Get all clubs */
	getAllClubs: function (req, res) {
		new Model.Club()
			.fetchAll()
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
		new Model.Club()
			.where('id', clubId)
			.fetch()
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get all starting players in a club */
	getAllStartingPlayersFromClub: function (req, res) {
		var clubId = req.params.id;
		new Model.Club()
			.where('id', clubId)
			.fetch({withRelated: ['starting_players']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Get all benched players in a club */
	getAllBenchedPlayersFromClub: function (req, res) {
		var clubId = req.params.id;
		new Model.Club()
			.where('id', clubId)
			.fetch({withRelated: ['benched_players']})
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
		new Model.Club()
			.where('id', clubId)
			.fetch({withRelated: ['players']})
			.then(function (model) {
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Join a division */
	joinDivision: function (req, res) {
		var clubId = req.params.id;
		var divisionId = parseInt(req.params.did);
		new Model.Club()
			.where('id', clubId)
			.fetch()
			.then(function (model) {
				model.set('division_id', divisionId);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Leave a division */
	leaveDivision: function (req, res) {
		var clubId = req.params.id;
		var divisionId = parseInt(req.params.did);
		new Model.Club()
			.where('id', clubId)
			.fetch()
			.then(function (model) {
				model.set('division_id', null);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Join a stadium */
	joinStadium: function (req, res) {
		var clubId = req.params.id;
		var stadiumId = parseInt(req.params.sid);
		new Model.Club()
			.where('id', clubId)
			.fetch()
			.then(function (model) {
				model.set('stadium_id', stadiumId);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Leave a leave */
	leaveStadium: function (req, res) {
		var clubId = req.params.id;
		var divisionId = parseInt(req.params.did);
		new Model.Club()
			.where('id', clubId)
			.fetch()
			.then(function (model) {
				model.set('stadium_id', stadiumId);
				model.save();
				res.json(model);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	},

	/* Hire a manager */
	hireManager: function (req, res) {
	  var clubId = req.params.id;
	  var managerId = parseInt(req.params.mid);
	  new Model.Club()
	    .where('id', clubId)
	    .fetch()
	    .then(function (model) {
	      model.set('manager_id', managerId);
	      model.save();
	      res.json(model);
	    }).catch(function (error) {
	      console.log(error);
	      res.send('An error occured');
	    });
	},

	/* Fire a leave */
	fireManager: function (req, res) {
	  var clubId = req.params.id;
	  var managerId = parseInt(req.params.mid);
	  new Model.Club()
	    .where('id', clubId)
	    .fetch()
	    .then(function (model) {
	      model.set('manager_id', null);
	      model.save();
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
