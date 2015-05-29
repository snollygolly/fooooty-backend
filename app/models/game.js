'use strict';

var bookshelf = require('../../config/db').bookshelf;
var faker = require('faker');
var Club = require('./club').Club;
var Day = require('./club').Day;
var utility = require('../helpers/utility');


var Game = bookshelf.Model.extend({
  tableName: 'games',
  home_club: function(){
    return this.belongsTo(Club, 'home_club_id');
  },
  away_club: function(){
    return this.belongsTo(Club, 'away_club_id');
  },
  winner_club: function(){
    return this.belongsTo(Club, 'winner_club_id');
  },
  loser_club: function(){
    return this.belongsTo(Club, 'loser_club_id');
  },
  started: function(){
    return this.belongsTo(Day);
  }
});

var create = function(){
  //this will probably change
  return {
    day_id: 1
  };
}

module.exports = {
	Game: Game,
  create: create
};
