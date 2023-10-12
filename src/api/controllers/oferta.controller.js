const Project = require("../models/oferta.model")

const addProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const createdProject = await newProject.save();

        return res.status(200).json({ message: "proyecto creado", data: createdProject })

    } catch (error) {

    }
}
const getProjects = async (req, res) => {
    try {

        const projects = await Project.find().populate("student")
        return res.status(200).json(projects)
    } catch (error) {

    }
}
const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate("student");
        //const project = await Project.find({ _id: req.params.id }).populate("student");
        return res.status(200).json(project)
    } catch (error) {

    }

}
module.exports = { addProject, getProjects, getProjectById }