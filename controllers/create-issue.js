const ProjectDetails = require('../models/project-details');
const BugDetails = require('../models/bug-details');

//This is to display the create issue page for particular project
module.exports.create_issue = function(req,res){
    try{
        res.render('create-issue',{
            postid:req.params.id,
            title:"Create Issue",
            createBug:true,
            home:true
        })
    }
    catch(err){
        console.log('Error occured while displaying project details',err)
    }
}


//This is to create bug or issue for particular project.
module.exports.create_Bug = async function(req,res){
    try{
        let bug = await BugDetails.create(req.body);
        let project = await ProjectDetails.findById(req.body.projectID);
        project.issues.push(bug)// pushing the created bug into ProjectDetails schema for faster query so that we can display it in view-project-details
        project.save()
        res.redirect('back');
    }
    catch(err){
        console.log('Error occured while creating bug',err)
    }
}
    