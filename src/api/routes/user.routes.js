const express = require("express")

const { register, login, profile, getUser, getUserById, getUserByEmail, putUser, deleteUser } = require("../controllers/user.controller")
const { isAuth } = require("../../middleware/auth")
const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.get("/profile", [isAuth], profile); // recibir un token
router.get("/:id", getUserById);
router.get("/", getUser);
router.get("/:email", getUserByEmail);
router.put("/:id", putUser);
router.delete("/:id", deleteUser)

module.exports = router;