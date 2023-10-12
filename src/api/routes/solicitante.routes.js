const express = require("express")
const { newStudent, getStudent, updateStudent, deleteStudent, getStudentbyName } = require("../controllers/student.controller")

const router = express.Router()
const upload = require("../../middleware/upload.file");

router.post("/register", upload.single("image"), newStudent) // crear
//
router.get("/", getStudent);
router.get("/:nameStudent", getStudentbyName);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent)



module.exports = router;