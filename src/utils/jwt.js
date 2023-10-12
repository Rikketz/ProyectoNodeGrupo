const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, "pepinitoMieloso87654321");
}

const generateToken = (id, email) => {
    return jwt.sign({ id, email }, "pepinitoMieloso87654321", { expiresIn: '6h' })
}



module.exports = { generateToken, verifyToken }