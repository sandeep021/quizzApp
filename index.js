import express from "express";
import bodyParser from "body-parser"
import ejs from "ejs"
import mongoose from "mongoose";
import Subject from "./model/Teacher.js";
import Question from "./model/Question.js";
const CONNECTION_URL = "mongodb+srv://sandeep021:Sandeep1@coc@cluster0.3oiuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
console.log(process.env.CONNECTION_URL);
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true });
import dotenv from "dotenv";
dotenv.config();

const app= express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.render("home");
  });
// kaun sa subject choose hua hai.
  app.post("/", function(req, res){
    const subject=req.body.subject;
    console.log(subject);
})
app.get("/suceesfullyAdded", function(req, res){
    res.send("<h1>SucessFully Added </h1>")
})
app.get("/addNewQuestion", function(req, res){
    res.render("newquestion");
  });
//data nye question add ka.
app.post("/addNewQuestion", function(req, res){
    const data=req.body;
    console.log(data);
    const questionNew = new Question({
        title:req.body.newQuestion,
        options:[req.body.option1, req.body.option2, req.body.option3, req.body.option4],
        subject:req.body.subject,
        correctAnswer:req.body.correctOption
    })
    questionNew.save(function(err, results){
        //find the subject then add the id in that subject array.
        console.log(results._id);
        res.redirect("/suceesfullyAdded")
    })
})




app.get("/", function(req, res){
    //try{
        const  subject =  Subject.find();
        console.log(subject);
        //res.status(200).json(subject);
    //}
    //?
})


app.listen(3000, function(){
   console.log("server started at 3000");
});