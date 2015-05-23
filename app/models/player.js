'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./club').Club;
var faker = require('faker');

var Player = bookshelf.Model.extend({
  tableName: 'players',
  club: function(){
    return this.belongsTo(Club);
  }
});

var create = function(){
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  };
}

module.exports = {
	Player: Player,
  create: create
};
