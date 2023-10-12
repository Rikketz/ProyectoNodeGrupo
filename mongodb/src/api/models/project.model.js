const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    student: [{ type: Schema.ObjectId, ref: "student" }]
}, {
    collection: "project"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Project = mongoose.model("project", projectSchema)
module.exports = Project;