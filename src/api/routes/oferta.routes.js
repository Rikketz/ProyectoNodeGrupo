const express = require("express")
const router = express.Router();

const { addOferta, getOfertas, getOfertaById } = require("../controllers/oferta.controller")

router.post("/", addOferta)
router.get("/", getOfertas)
router.get("/:id", getOfertaById)

module.exports = router;