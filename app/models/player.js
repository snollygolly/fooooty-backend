'use strict';

var bookshelf = require('../../config/db').bookshelf;

var Player = bookshelf.Model.extend({
  tableName: 'players'
});

var obj = {
  first_name: "Test",
  last_name: "Player"
};

module.exports = {
	Player: Player,
  obj: obj
};
