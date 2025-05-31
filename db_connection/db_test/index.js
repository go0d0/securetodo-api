const {Pool} = require("pg");

require("dotenv").config({path: `.env.${process.env.NODE_ENV}`});

const pool = new Pool ({
  connectionString: process.env.Db_url
});


module.exports = {
  query : (text, params) => pool.query(text,params),
	end: () => pool.end()
}
