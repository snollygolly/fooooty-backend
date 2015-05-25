'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./club').Club;
var faker = require('faker');

var Manager = bookshelf.Model.extend({
  tableName: 'managers',
  club: function(){
    return this.hasOne(Club);
  },
  bot: function(){
    //return this.hasOne(Bot);
  }
});

var create = function(){
  return {
    name: faker.name.firstName() + " " + faker.name.lastName()
  };
}

module.exports = {
	Manager: Manager,
  create: create
};
