const express = require("express")
const router = express.Router();

const { addOferta, getOfertas, getOfertaById, putOferta } = require("../controllers/oferta.controller")

router.put("/:id", putOferta)
router.post("/", addOferta)
router.get("/", getOfertas)
router.get("/:id", getOfertaById)

module.exports = router;