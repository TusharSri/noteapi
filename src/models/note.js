const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
    title : {
        type : String,
        required: true
    }, 
    description : {
        type: String, 
        requried: true
    }, 
    userId: {
        type: mongoose.Types.ObjectId, 
        ref: "User", 
        requried: true
    }
}, {timestamps : true});

module.exports = mongoose.model("Note", NoteSchema);