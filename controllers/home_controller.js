const ProjectDetails = require('../models/project-details');

// this is to display the project details on UI
module.exports.Home = async function(req,res){
    try{
        let projects = await ProjectDetails.find({})
        res.render('home',{
            title : "Issue Tracker",
            home:true,
            projects
        })
    }
    catch(err){
        console.log('Error occured while displaying project details',err)
    }
}
    