const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ofertaSchema = new Schema({

    name: { type: String, require: true },
    description: { type: String, require: true },
    oferta: [{ type: Schema.ObjectId, ref: "oferta" }]
}, {

    collection: "oferta"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Oferta = mongoose.model("oferta", ofertaSchema)
module.exports = Oferta;

