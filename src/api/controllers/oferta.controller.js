
const Oferta = require("../models/oferta.model")

const addOferta = async (req, res) => {
    try {
        const newOferta = new Oferta(req.body);
        const createdOferta = await newOferta.save();
        return res.status(200).json({ message: "proyecto creado", data: createdOferta })

    } catch (error) {

    }
}

const getOfertas = async (req, res) => {
    try {
<<<<<<< HEAD
        const ofertas = await Oferta.find().populate("solicitante")
=======

        const ofertas = await Oferta.find()  //.populate("oferta")
>>>>>>> e35a674e9296ca9e3e334e9fe8e1476fc05011cc
        return res.status(200).json(ofertas)
    } catch (error) {
        return res.json(error)
    }
}

const getOfertaById = async (req, res) => {
    try {
        const oferta = await Oferta.findById(req.params.id)  //.populate("oferta");
        return res.status(200).json(oferta)
    } catch (error) {

    }

}

module.exports = { addOferta, getOfertas, getOfertaById }

