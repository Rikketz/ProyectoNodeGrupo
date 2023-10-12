
const Solicitante = require("../models/solicitante.model");

const newSolicitante = async (req, res) => {
    try {
        const body = req.body;
        const solicitante = new Solicitante(body);

        if (req.file.path) {
            solicitante.image = req.file.path;
        }
        const createdSolicitante = await solicitante.save();
        return res.json(createdSolicitante)
    } catch (error) {
        return res.json(error)
    }
}

const getSolicitante = async (req, res) => {
    try {
        const solicitantes = await Solicitante.find();
        return res.status(200).json(solicitantes)


    } catch (error) {
        return res.json(error)
    }
}

const updateSolicitante = async (req, res) => {
    try {
        const { id } = req.params;
        const solicitanteBody = new solicitante(req.body);
        solicitanteBody._id = id;
        const updateSolicitante = await Solicitante.findByIdAndUpdate(id, solicitanteBody, { new: true });
        if (!updateSolicitante) {
            return res.status(404).json({ message: "solicitante no existe" })
        }
        return res.status(200).json(updateSolicitante)
    } catch (error) {

    }
}
const deleteSolicitante = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteSolicitante = await Solicitante.findByIdAndDelete(id);
        if (!deleteSolicitante) {
            return res.status(404).json({ message: "solicitante no existe" })
        }
        return res.status(200).json(deleteSolicitante)

    } catch (error) {

    }
}

const getSolicitantebyName = async (req, res) => {
    try {
        const { nameSolicitante } = req.params;
        const solicitantes = await Solicitante.find({ name: nameSolicitante });
        return res.status(200).json(solicitantes)

    } catch {
        return res.json(error)
    }
}

module.exports = { newSolicitante, getSolicitante, updateSolicitante, deleteSolicitante, getSolicitantebyName }

