require("dotenv").config(); 
const app = require("./aplikasi");

const port = process.env.PORT;

app.listen(port, () => { 
console.log(`server jalan di localhost dengan port ${port}`);	

});
