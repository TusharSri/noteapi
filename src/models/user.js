const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required: true
    }, 
    password : {
        type: String, 
        requried: true
    }, 
    email: {
        type: String, 
        requried: true
    }
}, {timestamps : true});

module.exports = mongoose.model("User", UserSchema);