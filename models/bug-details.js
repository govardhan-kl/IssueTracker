const mongoose = require('mongoose');
const textSearch = require('mongoose-text-search');

const projectDetailsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    labels:[
        {
        type: String,
        required: true
        }
    ],//labels will be stored in array.
    author:{
        type: String,
        required: true
    },
    projectID:{
        type:String,
        required: true
    }//to create issues for particular project we use the project id to differentiate to ehich project issue belongto
},{
    timestamps:true
})

projectDetailsSchema.plugin(textSearch);
// projectDetailsSchema.index({title: 'text', description: 'text'});
// projectDetailsSchema.clearIndexes({title: 'text', description: 'text'});

const BugDetails = mongoose.model('BugDetails',projectDetailsSchema);

module.exports = BugDetails