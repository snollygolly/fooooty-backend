'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Division = require('./division').Division;
var faker = require('faker');

var Nation = bookshelf.Model.extend({
  tableName: 'nations',
  divisions: function(){
    return this.hasMany(Division);
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
