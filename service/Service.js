const logikaBisnis = require("../db_connection/mongoCrud")

exports.ambilSemua = () => logikaBisnis.find();
exports.ambilSebagian  = (id) => logikaBisnis.findById(id);
exports.buatTodo = (data) => logikaBisnis.create(data);
exports.ubah = (id,data) => logikaBisnis.findByIdAndUpdate(id,data,{new : true});
exports.hapus = (id) => logikaBisnis.findByIdAndDelete(id);

const identitas = require("../db_connection/postgresCrud");

exports.ambilSemua = async () =>  { 
const hasil = await identitas.query("SELECT * FROM pengguna");
res.json(hasil);
  
}

