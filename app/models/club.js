'use strict';

var bookshelf = require('../../config/db').bookshelf;

var Club = bookshelf.Model.extend({
  tableName: 'clubs',
  players: function(){
    return this.hasMany(Player);
  }
});

var obj = {
  name: "Test Club"
};

module.exports = {
	Club: Club,
  obj: obj
};
