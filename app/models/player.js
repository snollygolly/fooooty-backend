'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./club').Club;
var faker = require('faker');
var utility = require('../helpers/utility');

var Player = bookshelf.Model.extend({
  tableName: 'players',
  club: function(){
    return this.belongsTo(Club);
  }
});

var create = function(){
  var positions = ["GK", "SW", "DF", "MF", "FW", "UT"];
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    position: utility.getRandomIndex(positions),
    health: 100
  };
}

module.exports = {
	Player: Player,
  create: create
};
