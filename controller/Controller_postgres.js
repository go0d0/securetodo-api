const servisPg = require("../service/Service");

exports.ambilSemua = async (req,res) => {
try{
	const hasil = await servisPg.PgAmbilSemua();
res.json(hasil);
}catch(err){
console.error(err)
	res.status(500).json({message:"gagal ngambil data dari db"});
}
}

exports.ambilSebagian = async (req,res) => { 
 try{
 const hasil  = await servisPg.PgambilDenganId(req.params.id);
	 if(!hasil) return res.status(404).json({message:"pengguna tidak ditemukan"});
	 res.json(hasil);

 }catch(err){
 console.error(err);
	 res.status(500).json({error: "gagal ngambil data menggunakan id"})
 }

}

exports.buatData = async (req,res) => {
try{
const buat = await servisPg.PgBuatData(req.body);
res.status(201).json(buat);
}catch (err){
console.error(err);
	res.status(500).json({error: "kesalahan saat buat data"});

}
}

exports.update = async (req,res) => {

	try{
	const hasil = await servisPg.PgUpdate(req.params.id,req.body);
		if(!hasil) return res.status(404).json({message:"pengguna yang ingin diupdate tidak ditemukan"});
		res.json(hasil);
	}catch(err){
	console.error(err);
res.status(500).json({error: "terdapat kesalahan di update"});
	}

}

exports.hapus = async (req,res) => {
try{
const hasil = await servisPg.PgHapus(req.params.id);
res.json({message:"data berhasil dihapus"});
}catch(err){
console.error(err);
res.status(500).json({error:"data yang ingin dihapus tidak ditemukan"});
}

}


exports.login = async (req,res) => {
  try{
    const {username,password} = req.body;
    const hasil = await servisPg.validasiUser(username,password)
    if(!hasil) return res.status(401).json({message:"data tidak valid"})
    const token = servisPg.buatToken(hasil);
    res.json({message:"login berhasil", token})
  }catch(eror){
    console.error(eror)
    res.status(500).json({message:"terjadi kesalahan server"})
  }
  
  
}