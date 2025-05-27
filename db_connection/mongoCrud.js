/* 
db import
*/
require("dotenv").config({path:"../.env"});

const koneksiMongo = require("mongoose");

// url connection for mongodb
const url = process.env.url_mongodb;
// mongo connection
koneksiMongo.connect(url)

// buat struktur table mongo
const mongodb = new koneksiMongo.Schema({
  title: String, 
  description: String
})

// operasi mongo terjadi 
const Todo = koneksiMongo.model("Todo", mongodb)
module.exports = Todo;