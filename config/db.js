if (process.env.NODE_ENV == "production"){
  var DBConfig = {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'kCRipSLVG0',
      database : 'football',
      charset  : 'utf8'
    }
  };
} else {
  var DBConfig = {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'root',
      database : 'football',
      charset  : 'utf8'
    }
  };
}

var knex = require('knex')(DBConfig);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;
