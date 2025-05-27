const operasi = require("../service/Service")

exports.ambil = async (req,res) => {
  const hasil = await operasi.ambilSemua();
  res.json(hasil);
}


exports.ambilDenganId = async (req,res) => { 
const hasil = await operasi.ambilSebagian(req.params.id);
  res.json(hasil)
}

exports.buatC = async (req,res) => { 
 const hasil = await operasi.buatTodo(req.body);
 res.status(201).json(hasil);
}

exports.ubahC = async (req,res) => { 

  const hasil = await operasi.ubah(req.params.id, req.body)
  res.json(hasil)
}


exports.hapusC = async (req,res) =>  { 
const hasil = await operasi.hapus(req.params.id);
  res.json(hasil)
}