const express = require('express');
const { connectDb } = require("./src/utils/database");
const routerSolicitante = require("./src/api/routes/solicitante.routes");
const routerOferta = require("./src/api/routes/oferta.routes");
const routesUser = require("./src/api/routes/user.routes")
const env = require("dotenv")
env.config()

const cloudinary = require("cloudinary").v2;
const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: '166546695924651',
  api_secret: '7pud0gbNeUvw8-IZHnXCNA5_bqg'
});

connectDb();

app.use("/solicitante", routerSolicitante);
app.use("/oferta", routerOferta);
app.use("/user", routesUser)

const PORT = 5051;
app.listen(PORT, () => {
  console.log('escuchando por el puerto ' + PORT);
});
