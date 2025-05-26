const buatPasswordHash = require("bcryptjs");

async function hash(){
const pw = "admin123";
const acak = await buatPasswordHash.genSalt(10);

	const hasil =await  buatPasswordHash.hash(pw,acak);
		console.log("password hasil hash:", hasil);

}


hash();
