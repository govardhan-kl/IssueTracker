# A ISSUE TRACKER


### General steps to follow while creating a project are

- Thinking about the UI, Using MVC model to create project
- Functionality
	- Display the projects on home page
	- User will be able to create projects
	- User is able to view the project details
	- Create a Issues for particular project
    - Create a labels for each issue and implemet search and filters

- Data
	- MongoDB
        - Models
            - Project-details
            - Bug-details

- Views 
    - home.ejs - To displays all projects.
    - addProject.ejs - To display create project page.
    - Create-issue.ejs - To display create issue page.
    - view-project-details.ejs - To dispaly project details.


- Functions used in controllers(in code)
    - In Home Controller
        - Home - where all the projects are displayed by fetching from DB.
    - In AddProject Controller 
        - addProject -  Displays create-project on UI.
        - create - To create project.
    - In View-project controller
        - view_details - fetaches the issues of particular project and displays
        - filter - Where it performs filter operation based on user input.
    - In Create-Issue controller
        - create_issue - Displays the UI to create issue for paticular project.
        - create_Bug - It creates a bug for particular project.