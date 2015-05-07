module.exports = {
	PORT: process.env.PORT || 3000,
	NODE_ENV: process.env.NODE_ENV,
	JWT_SECRET: 'SUPER_SECRET_GOES_HERE',
	DB_CONFIG: {
	  client: 'mysql',
	  connection: {
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : 'root',
	    database : 'football',
	    charset  : 'utf8'
	  }
	}
};
