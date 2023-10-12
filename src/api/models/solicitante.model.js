const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const solicitanteSchema = new Schema({

    name: { type: String, require: true },
    username: { type: String, require: true },
    age: { type: Number },
    image: { type: String, default: "" },
}, {

    collection: "solicitante"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Solicitante = mongoose.model("solicitante", solicitanteSchema)
module.exports = Solicitante;
