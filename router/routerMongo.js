// import lib express
const expres = require("express");

// import lib router dari express
const router = expres.Router();


// imoprt controllernya
const kendali = require("../controller/Controller_mongo")

router.get("/", kendali.ambil);
router.get("/:id", kendali.ambilDenganId);
router.post("/",kendali.buatC);
router.put("/:id",kendali.ubahC);
router.delete("/:id", kendali.hapusC)



module.exports = router;