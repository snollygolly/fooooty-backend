'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./player').Club;
var Nation = require('./division').Nation;
var faker = require('faker');

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
  var stadiumSize = getRandomInt(minCapacity, maxCapacity) * 100;
  //setting name
  var companyName = faker.company.companyName();
  var stadiumSuffix = stadiumTypes[getRandomInt(0, stadiumTypes.length - 1)];
  return {
    name: companyName + " " + stadiumSuffix,
    media: getRandomInt(15, 90),
    lighting: getRandomInt(35, 95),
    grass: getRandomInt(50, 100),
    capacity: stadiumSize,
    parking: Math.floor(stadiumSize * parkingPercentage)
  };
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
	Stadium: Stadium,
  create: create
};
