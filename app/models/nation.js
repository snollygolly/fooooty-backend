'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./Club').Club;
var faker = require('faker');

var Nation = bookshelf.Model.extend({
  tableName: 'nations',
  clubs: function(){
    return this.hasMany(Club);
  }
});

var create = function(){
  var country = faker.address.country();
  return {
    name: country,
    slug: country.toLowerCase().replace(" ", "_")
  };
}

module.exports = {
	Nation: Nation,
  create: create
};
