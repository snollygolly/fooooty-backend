'use strict';

var bookshelf = require('../../db').bookshelf;

var Player = bookshelf.Model.extend({
  tableName: 'players'
});

module.exports = {
	Player: Player
};
