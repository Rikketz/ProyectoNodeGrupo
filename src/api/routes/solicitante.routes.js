const express = require("express")

const { newSolicitante, getSolicitante, updateSolicitante, deleteSolicitante, getSolicitantebyName } = require("../controllers/solicitante.controller")

const router = express.Router()
const upload = require("../../middleware/upload.file");

router.post("/register", upload.single("image"), newSolicitante) // crear
//
router.get("/", getSolicitante);
router.get("/:nameSolicitante", getSolicitantebyName);
router.put("/:id", updateSolicitante);
router.delete("/:id", deleteSolicitante)

module.exports = router;