//requiring the library
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/task_list_db');

//acquiring the connection to see if it is successful
const db=mongoose.connection;

//on error
db.on('error',console.error.bind(console,'error connecting to database'));


//no error
db.once('open',function(){
    console.log("Successfully connected to the database !");
})
