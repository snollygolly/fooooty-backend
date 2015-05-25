'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Manager = require('./manager').Manager;
var faker = require('faker');
var utility = require('../helpers/utility');

var Bot = bookshelf.Model.extend({
  tableName: 'bots',
  managers: function(){
    return this.hasMany(Manager);
  }
});

var create = function(){
  var positions = ["GK", "SW", "DF", "MF", "FW", "UT"];
  return {
    name: faker.internet.userName(),
    position_pref: utility.getRandomIndex(positions),
    ost: utility.getRandomInt(10,25),
    sweeper: utility.getRandomInt(15,30),
    hardness: utility.getRandomInt(1,8)
  };
}

module.exports = {
	Bot: Bot,
  create: create
};
