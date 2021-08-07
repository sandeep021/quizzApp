import mongoose from "mongoose";

const subject = mongoose.Schema({
    Name: String,
    Questions: [String]   
});

const Subject = mongoose.model("Subject", subject);
export default Subject;
