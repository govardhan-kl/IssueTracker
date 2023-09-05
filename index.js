const express = require('express');
const app = express();
const port = 8090;
const db = require('./config/mongoose')

app.use(express.urlencoded({ extended: true }));

//setting layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//setup static file location
app.use(express.static('assets'));

//extracting styles and scripts from sub pages into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//creating middleware to access routes
app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if (err){
        console.log(`Error : ${err}`); // to embed variable inside  a string, we use bactick character. this is called interpolation
    }
    console.log(`Server is running on port : ${port}`);
})