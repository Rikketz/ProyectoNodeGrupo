const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: Number, require: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user", "company"] },
},
{
    collection: "user", timestamps: true
});
//string, number, array, date, mixed, boolean,  ObjectId

const User = mongoose.model("user", userSchema)
module.exports = User;