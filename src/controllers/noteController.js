const noteModel = require("../models/note");

const createNote = async (req, res) => {
    const { title, description} = req.body;

    const newNote = new noteModel({
        title: title, 
        description: description, 
        userId: req.userId
    }); 

    try{ 
        await newNote.save(); 
        res.status(201).json({message: "New note created"});
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const getNotes = async (req, res) => {
    try {
        const notes = await noteModel.find({userId: req.userId});
        res.status(200).json(notes);
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const updateNote = async (req, res) => {
    const id = req.params.id;
    const{title, description} = req.body;

    const newNote = {
        title: title, 
        description: description, 
        userId: req.userId
    }

    try{
        await noteModel.findByIdAndUpdate(id, newNote, {new: true});
        res.status(200).json({message: "Note Updated"})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const deleteNote = async (req, res) => {
    const id = req.params.id;

    try{
        const note = await noteModel.findByIdAndRemove(id);
        res.status(202).json({message: "Note Deleted"})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createNote, 
    deleteNote, 
    updateNote, 
    getNotes
}