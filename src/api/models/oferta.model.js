const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ofertaSchema = new Schema({

    name: { type: String, require: true },
    description: { type: String, require: true },
    inscritos: [{ type: Schema.ObjectId, ref: "user" }],
    salario: {type: String, require: true},
    fecha: {type: String, require:true},
    active: {type: Boolean, require:true}
}, {

    collection: "oferta"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Oferta = mongoose.model("oferta", ofertaSchema)
module.exports = Oferta;

