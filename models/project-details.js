const mongoose = require('mongoose');
const { type } = require('os');

const projectDetailsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    issues:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BugDetails'
        }//this is to store all the issues of that praticular project so later we can populate
    ]
},{
    timestamps:true
})

const ProjectDetails = mongoose.model('ProjectDetails',projectDetailsSchema);

module.exports = ProjectDetails