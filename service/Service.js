const  hash = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({path:"../.env"});
const kunci = process.env.jwt_key;


// query db for mongodb
const logikaBisnis = require("../db_connection/mongoCrud")

exports.ambilSemua = () => logikaBisnis.find();
exports.ambilSebagian  = (id) => logikaBisnis.findById(id);
exports.buatTodo = (data) => logikaBisnis.create(data);
exports.ubah = (id,data) => logikaBisnis.findByIdAndUpdate(id,data,{new : true});
exports.hapus = (id) => logikaBisnis.findByIdAndDelete(id);
// query db for postgresql
// ../db_connection/postgresCrud
const identitas = require("../db_connection/db_test");

exports.PgAmbilSemua = async () =>  { 
const hasil = await identitas.query("SELECT * FROM pengguna");
return hasil.rows;
}	
exports.PgambilDenganId = async (id) => { 
const hasil = await identitas.query(`select  * from pengguna where id = $1`, [id]);
	return hasil.rows[0];
}

exports.PgBuatData = async (data) => { 
const hashPassword = await hash.hash(data.password, 10);
const hasil = await identitas.query(`insert into pengguna (username, password) values ($1, $2) returning *`,[data.username,hashPassword]);
	return hasil.rows[0];
}


exports.PgUpdate = async (id,data) => { 
const hasil = await identitas.query(`update pengguna set username = $1, password = $2  where id =$3 returning *`, [data.username,data.password,id]);

	return hasil.rows[0];
}

exports.PgHapus = async (id) => { 
 await identitas.query(`delete from pengguna where id = $1`, [id]); 	

}
 
exports.validasiUser= async (username,password) => {
  
  const hasil = await identitas.query(`select * from pengguna where username = $1`,[username])
  
  const user = hasil.rows[0];
  if(!user) return null;
  
  const validPw = await hash.compare(password, user.password);
  if(!validPw) return null;
  
  return user;
}


exports.buatToken= (data) => {
  const isi ={
    id : data.id,
    nama : data.username
  }
  return jwt.sign(isi,kunci, {expiresIn : "1h"});
}
