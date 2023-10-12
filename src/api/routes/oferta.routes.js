const express = require("express")
const router = express.Router();

const { addOferta, getOfertas, getOfertaById, putOferta } = require("../controllers/oferta.controller")

router.post("/", addOferta)
router.get("/", getOfertas)
router.get("/:id", getOfertaById)
router.put("/id:", putOferta)

module.exports = router;