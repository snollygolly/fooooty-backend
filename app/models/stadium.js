'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./player').Club;
var Nation = require('./division').Nation;
var faker = require('faker');
var utility = require('../helpers/utility');

var Stadium = bookshelf.Model.extend({
  tableName: 'stadiums',
  clubs: function(){
    return this.hasMany(Club);
  },
  nation: function(){
    return this.belongsTo(Nation);
  }
});

var create = function(){
  var stadiumTypes = ["Stadium", "Bowl", "Field", "Park", "Place", "Arena", "Center", "Sports Complex", "Coliseum"];
  //in hundreds
  var maxCapacity = 1100;
  var minCapacity = 150;
  //how many heads to a car
  var headToCar = 8;
  var parkingPercentage = (1 / headToCar);
  //setting size for stadium
  var stadiumSize = utility.getRandomInt(minCapacity, maxCapacity) * 100;
  //setting name
  var companyName = faker.company.companyName();
  var stadiumSuffix = utility.getRandomIndex(stadiumTypes);
  return {
    name: companyName + " " + stadiumSuffix,
    media: utility.getRandomInt(15, 90),
    lighting: utility.getRandomInt(35, 95),
    grass: utility.getRandomInt(50, 100),
    capacity: stadiumSize,
    parking: Math.floor(stadiumSize * parkingPercentage)
  };
}

module.exports = {
	Stadium: Stadium,
  create: create
};
