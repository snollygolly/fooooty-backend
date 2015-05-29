'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Game = require('./game').Game;
var faker = require('faker');
var current_day = 1;

var Day = bookshelf.Model.extend({
  tableName: 'days',
  games: function(){
    return this.hasMany(Game);
  }
});

var create = function(){
  return {
    day: current_day++,
    started: new Date()
  };
}

module.exports = {
	Day: Day,
  create: create
};
