'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./club').Club;
var Nation = require('./nation').Nation;
var faker = require('faker');

var Division = bookshelf.Model.extend({
  tableName: 'divisions',
  clubs: function(){
    return this.hasMany(Club);
  },
  nation: function(){
    return this.belongsTo(Nation);
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
