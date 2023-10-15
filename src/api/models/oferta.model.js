const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ofertaSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    inscritos: [{ type: Schema.ObjectId, ref: "user" }],
    salary: {type: String, required: true},
    date: {type: String, required:true},
    active: {type: Boolean, default:false}
}, {

    collection: "oferta"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Oferta = mongoose.model("oferta", ofertaSchema)
module.exports = Oferta;

