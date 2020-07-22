const express=require('express');
const port=8000;

const db=require('./config/mongoose');
const Task=require('./models/task');

const app=express();


//TEMPLATE ENGINE
app.set('view engine','ejs');
app.set('views','./view');

//MIDDLEWARE
app.use(express.urlencoded());
app.use(express.static('assets'));


//CONTROLLER

app.get('/',function(req,res)
{

    Task.find({},function(err,tasks){
        if(err){
            console.log("error in fetching tasks from the database");
            return;
        }
        return res.render('home',{
            task_list:tasks,
        });
    });
    
});




app.post('/create-task',function(req,res){

    Task.create({
        task:req.body.description,
        date:req.body.date,
        nature:req.body.category,
    },function(err,newTask){
        if(err){
            console.log("error in creating contact !");
        }
        else{
            console.log("********",newTask);
            return res.redirect('back');
        }
    });

});




app.listen(port,function(err){
    if(err){
        console.log("Error is running the express server err:",err);
    }
    else{
        console.log("Express Server is running on port:",port);}

    })