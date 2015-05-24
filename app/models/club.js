'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Player = require('./player').Player;
var Division = require('./division').Division;
var faker = require('faker');

var Club = bookshelf.Model.extend({
  tableName: 'clubs',
  players: function(){
    return this.hasMany(Player);
  },
  division: function(){
    return this.belongsTo(Division);
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
