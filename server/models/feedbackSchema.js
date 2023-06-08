import mongoose from "mongoose";
const { Schema } = mongoose;

// feedback model
const feedbackSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    feedback : {
        type : String,
        required : true
    }
});

const Feedback = new mongoose.model("FEEDBACK", feedbackSchema)

export default Feedback;