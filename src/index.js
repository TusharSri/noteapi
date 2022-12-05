const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const cros = require("cors");

const mongoose = require("mongoose");
app.use(express.json());
app.use(cros());

app.use("/users",userRouter);
app.use("/note",noteRouter);

const PORT = process.env.PORT || 5050;

mongoose.connect("mongodb+srv://admin:admin@cluster0.2sufrmq.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server Started on port " + PORT)
    });
})
.catch((error)=>{
    console.log(error);
})

app.get("/", (req, res)=> {
    res.send("hello from apiww");
});