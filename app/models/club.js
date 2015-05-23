'use strict';

var bookshelf = require('../../config/db').bookshelf;
var faker = require('faker');

var Club = bookshelf.Model.extend({
  tableName: 'clubs',
  players: function(){
    return this.hasMany(Player);
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
