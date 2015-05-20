'use strict';

var bookshelf = require('../../config/db').bookshelf;

var Club = bookshelf.Model.extend({
  tableName: 'clubs'
});

var obj = {
  name: "Test Club"
};

module.exports = {
	Club: Club,
  obj: obj
};
