const ProjectDetails = require('../models/project-details');

// this is to display the create project page on UI
module.exports.addProject = function(req,res){
    res.render('addProject');
}


//this is to create a project.
module.exports.create = async function(req,res){
    try{
        console.log(req.body)
        await ProjectDetails.create(req.body)
        res.redirect('back')
    }
    catch(err){
        console.log('error in creating project',err)
    }
}