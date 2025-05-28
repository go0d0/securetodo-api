/* 
db import
*/
require("dotenv").config({path:"../.env"});

const {Client} = require("pg")

//postgres connection
const postgres = new Client({
  user: process.env.pg_username,
  password : process.env.pg_password, 
  host: process.env.pg_host,
  port : process.env.pg_port,
  database : process.env.pg_database
})

postgres.connect()

module.exports = postgres;
