const expres = require("express");
const router  = expres.Router();
const ControlPg = require("../controller/Controller_postgres");

router.get("/login/", ControlPg.ambilSemua);
router.get("/login/:id",ControlPg.ambilSebagian);
router.post("/daftar", ControlPg.buatData);
router.put("/login/:id", ControlPg.update);
router.delete("/login/:id",ControlPg.hapus);
router.post("/login", ControlPg.login);


module.exports = router;
