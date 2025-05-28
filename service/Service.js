// query db for mongodb
const logikaBisnis = require("../db_connection/mongoCrud")

exports.ambilSemua = () => logikaBisnis.find();
exports.ambilSebagian  = (id) => logikaBisnis.findById(id);
exports.buatTodo = (data) => logikaBisnis.create(data);
exports.ubah = (id,data) => logikaBisnis.findByIdAndUpdate(id,data,{new : true});
exports.hapus = (id) => logikaBisnis.findByIdAndDelete(id);
// query db for postgresql
const identitas = require("../db_connection/postgresCrud");

exports.PgAmbilSemua = async () =>  { 
const hasil = await identitas.query("SELECT * FROM pengguna");
return hasil.rows;
}	
exports.PgambilDenganId = async (id) => { 
const hasil = await identitas.query(`select  * from pengguna where id = $1`, [id]);
	return hasil.rows[0];
}

exports.PgBuatData = async (data) => { 

const hasil = await identitas.query(`insert into pengguna (username, password) values ($1, $2) returning *`,[data.username,data.password]);
	return hasil.rows[0];
}


exports.PgUpdate = async (id,data) => { 
const hasil = await identitas.query(`update pengguna set username = $1, password = $2  where id =$3 returning *`, [data.username,data.password,id]);

	return hasil.rows[0];
}

exports.PgHapus = async (id) => { 
 await identitas.query(`delete from pengguna where id = $1`, [id]); 	

}
 

