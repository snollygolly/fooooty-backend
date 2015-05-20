'use strict';

var bookshelf = require('../../config/db').bookshelf;
var Club = require('./Club').Club;

var Player = bookshelf.Model.extend({
  tableName: 'players',
  club: function(){
    return this.belongsTo(Club);
  }
});

var obj = {
  first_name: "Test",
  last_name: "Player"
};

module.exports = {
	Player: Player,
  obj: obj
};
