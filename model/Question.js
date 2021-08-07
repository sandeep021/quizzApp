//<script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>
import mongoose from "mongoose";

const question = mongoose.Schema({
    title: String,
    options: [String],
    subject: String,
    correctAnswer: Number   
});

const Question = mongoose.model("Question", question);
export default Question;