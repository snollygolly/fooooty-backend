'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./club').Club;
var faker = require('faker');

var Division = bookshelf.Model.extend({
  tableName: 'divisions',
  clubs: function(){
    return this.hasMany(Club);
  }
});

var create = function(){
  return {
    name: faker.address.county()
  };
}

module.exports = {
	Division: Division,
  create: create
};
