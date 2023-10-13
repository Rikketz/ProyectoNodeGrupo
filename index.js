const express = require('express');
const cors = require('cors')
const { connectDb } = require("./src/utils/database");
const routerOferta = require("./src/api/routes/oferta.routes");
const routesUser = require("./src/api/routes/user.routes")
const env = require("dotenv")
env.config()

const cloudinary = require("cloudinary").v2;
const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());
app.use(cors())

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: '166546695924651',
  api_secret: '7pud0gbNeUvw8-IZHnXCNA5_bqg'
});

app.get('/oferta/:id', (req, res, next)=>{
  res.json({msg: 'This is CORS enable for all origins'})
});

app.listen(80, ()=>{
  console.log('CORS enabled web server listening on port 80')
})

connectDb();

app.use("/oferta", routerOferta);
app.use("/user", routesUser)

const PORT = 5000;
app.listen(PORT, () => {
  console.log('escuchando por el puerto ' + PORT);
});
