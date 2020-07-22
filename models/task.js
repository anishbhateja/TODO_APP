const mongoose=require('mongoose');

const taskSchema= new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    nature:{
        type:String
    },

    value:{
        type:Boolean,
    }
});

const Task=mongoose.model('Task',taskSchema);
module.exports=Task;