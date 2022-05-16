const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minlength:[ 2,"Title must be at least 2 letters"] ,
        unique: true //this validation is added to make every title unique from the rest
    },date:{
        type: Date,
        required: [
            true,
            "Date is required"
        ]
    }, status:{type: String,default: "todo"}
}, { timestamps: true });

module.exports.Task = mongoose.model('Task', TaskSchema);