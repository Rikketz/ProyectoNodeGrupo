
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

        const ofertas = await Oferta.find().populate("student")
        return res.status(200).json(ofertas)
    } catch (error) {

    }
}

const getOfertaById = async (req, res) => {
    try {
        const oferta = await Oferta.findById(req.params.id).populate("student");
        //const oferta = await Oferta.find({ _id: req.params.id }).populate("student");
        return res.status(200).json(oferta)
    } catch (error) {

    }

}

module.exports = { addOferta, getOfertas, getOfertaById }

