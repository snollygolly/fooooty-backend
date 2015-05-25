'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Player = require('./player').Player;
var Division = require('./division').Division;
var Stadium = require('./stadium').Stadium;
var Manager = require('./stadium').Manager;
var faker = require('faker');

var Club = bookshelf.Model.extend({
  tableName: 'clubs',
  players: function(){
    return this.hasMany(Player);
  },
  starting_players: function(){
    return this.hasMany(Player)
      .query('where', 'starting', true)
  },
  benched_players: function(){
    return this.hasMany(Player)
      .query('where', 'starting', false)
  },
  division: function(){
    return this.belongsTo(Division);
  },
  stadium: function(){
    return this.belongsTo(Stadium);
  },
  manager: function(){
    return this.belongsTo(Manager);
  }
});

var create = function(){
  return {
    name: faker.company.companyName()
  };
}

module.exports = {
	Club: Club,
  create: create
};
