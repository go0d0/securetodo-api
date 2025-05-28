const expres = require("express");
const router  = expres.Router();
const ControlPg = require("../controller/Controller_postgres");

router.get("/", ControlPg.ambilSemua);
router.get("/:id",ControlPg.ambilSebagian);
router.post("/", ControlPg.buatData);
router.put("/:id", ControlPg.update);
router.delete("/:id",ControlPg.hapus);


module.exports = router;
