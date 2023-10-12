const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const solicitanteSchema = new Schema({

    name: { type: String, require: true },
    surename: { type: String, require: true },
    age: { type: Number, require: true },
    curriculo: {type: String, require: true},
    disponibilidad: {type: String},
    telefono: {type: Number, require: true},
}, {

    collection: "solicitante"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Solicitante = mongoose.model("solicitante", solicitanteSchema)
module.exports = Solicitante;
