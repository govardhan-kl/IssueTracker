const ProjectDetails = require('../models/project-details');
const BugDetails = require('../models/bug-details');
const textSearch = require('mongoose-text-search');

// this is to display the project details and issues in project details
module.exports.view_details = async function(req,res){
    try{
        console.log("Project",req.url,req.params.id);
        let project = await ProjectDetails.findById(req.params.id).populate('issues')
        let issues = await BugDetails.find({projectID:req.params.id})
        res.render('view-project-details',{
            title : "Project Details",
            project,
            issues,
            filter:false //this helps us to get the all the bugs/issues in project for faster rendering/querying by populating
        })
    }
    catch(err){
        console.log('Error occured while displaying particular project details',err)
    }
}

module.exports.filter = async function(req,res){
    try{
        let body = req.body
        console.log("Filter",body,req.url,req.params.id);
        //perform  filter based on different criteria
        if (body){
            let projectid= req.params.id;
            let project = await ProjectDetails.findById(req.params.id).populate('issues')
            // if searching based on both authors and labels
            if(body.authors && body.labels){
                let autor = req.body.authors;
                let labels = req.body.labels;
                let issues = await BugDetails.find({projectID:projectid,author:autor,labels:{$all:labels}});
                return res.render('view-project-details',{
                    title:"Project Details",
                    project,
                    issues,
                    filter:true// this displays the only filtered data so we set filter as true
                })
            }
            // if searching based on  only authors
            else if(body.authors){
                let autor = req.body.authors;
                let issues = await BugDetails.find({projectID:projectid,author:autor});
                return res.render('view-project-details',{
                    title:"Project Details",
                    project,
                    issues,
                    filter:true
                })
            }
            // if searching based on only labels
            else if(body.labels){
                let labels = req.body.labels;
                let issues = await BugDetails.find({projectID:projectid,labels:{$all:labels}});
                return res.render('view-project-details',{
                    title:"Project Details",
                    project,
                    issues,
                    filter:true
                })
            }
            // if searching based on issue title/description.
            else if(body.issueName){
                let issueName = body.issueName;
                if(!issueName){// if filter is empty then we display and redirect to display all bugs/issues
                    return res.redirect(`/view-project-details/${req.params.id}`)
                }
                let issues = await BugDetails.find({projectID:projectid,$or: [
                    {description: { $regex: issueName , $options: "i"}},
                    {title: { $regex: issueName , $options: "i"}}
                  ]});
                console.log(issues,projectid);
                return res.render('view-project-details',{
                    title:"Project Details",
                    project,
                    issues,
                    filter:true
                })
            }
        }
        // if filter is empty then we display and redirect to display all bugs/issues
        return res.redirect(`/view-project-details/${req.params.id}`);
    }
    catch(err){
        console.log('Error occured while filtering particular project details',err)
    }
}
    