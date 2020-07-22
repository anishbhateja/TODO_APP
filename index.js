const express=require('express');
const path=require('path');
const port=8000;

const app=express();


//Template engine
app.set('view engine','ejs');
app.set('views','./view');

//MIDDLEWARE
app.set(express.urlencoded());
app.use(express.static('assets'));


//controller

app.get('/',function(res,res){
    return res.render('home');
})






app.listen(port,function(err){
    if(err){
        console.log("Error is running the express server err:",err);
    }
    else{
        console.log("Express Server is running on port:",port);}

    })