'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Player = require('./player').Player;
var Division = require('./division').Division;
var Nation = require('./nation').Nation;
var faker = require('faker');

var Club = bookshelf.Model.extend({
  tableName: 'clubs',
  players: function(){
    return this.hasMany(Player);
  },
  nation: function(){
    return this.belongsTo(Nation);
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
