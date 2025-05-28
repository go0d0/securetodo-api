require("dotenv").config({path:"../.env"});
const jwt  = require("jsonwebtoken");

function jwtMiddleware(req,res,next) {
const pathDilindungi = ["/todo"];
	if(pathDilindungi.includes(req.path)){
	const authHeader = req.headers['authorization'];
		if(!authHeader || !authHeader.startsWith("Bearer ")){
			return res.status(401).json({message: "format jwt tidak sesuai"});
		}
const token = authHeader.split(' ')[1];
try{
const secretKey = process.env.jwt_key;
const hasil = jwt.verify(token,secretKey);
	next();
}catch(err){
	console.error(err);
return res.status(403).json({message:"invalid token"});
}
	}else{
next();
	}
}

module.exports = jwtMiddleware;
