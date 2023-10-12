
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
        const ofertas = await Oferta.find().populate("inscritos")
        return res.status(200).json(ofertas)
    } catch (error) {
        return res.json(error)
    }
}

const getOfertaById = async (req, res) => {
    try {
        const oferta = await Oferta.findById(req.params.id).populate("inscritos");
        return res.status(200).json(oferta)
    } catch (error) {

    }

}

const putOferta = async (req, res) => {
    try {
        const { id } = req.params;
        const putOferta = new Oferta(req.body);
        putOferta._id = id;
        const updatedOferta = await Oferta.findByIdAndUpdate(id, putOferta, {
            new:true,
        })
        return res.status(200).json(updatedOferta);
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = { addOferta, getOfertas, getOfertaById, putOferta }

