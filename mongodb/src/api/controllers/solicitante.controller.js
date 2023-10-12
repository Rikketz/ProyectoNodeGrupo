const Student = require("../models/student.model");

const newStudent = async (req, res) => {
    try {
        const body = req.body;
        const student = new Student(body);

        if (req.file.path) {
            student.image = req.file.path;
        }
        const createdStudent = await student.save();
        return res.json(createdStudent)
    } catch (error) {
        return res.json(error)
    }
}
const getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json(students)

    } catch (error) {
        return res.json(error)
    }
}
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const studentBody = new Student(req.body);
        studentBody._id = id;
        const updateStudent = await Student.findByIdAndUpdate(id, studentBody, { new: true });
        if (!updateStudent) {
            return res.status(404).json({ message: "estudiante no existe" })
        }
        return res.status(200).json(updateStudent)
    } catch (error) {

    }
}
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if (!deleteStudent) {
            return res.status(404).json({ message: "estudiante no existe" })
        }
        return res.status(200).json(deleteStudent)

    } catch (error) {

    }
}


const getStudentbyName = async (req, res) => {
    try {
        const { nameStudent } = req.params;
        const students = await Student.find({ name: nameStudent });
        return res.status(200).json(students)
    } catch {
        return res.json(error)
    }
}
module.exports = { newStudent, getStudent, updateStudent, deleteStudent, getStudentbyName }