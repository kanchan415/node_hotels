const mongoose=require('mongoose')

const menuItem =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    }


})
const MenuItem=mongoose.model('MenuItem',menuItem);
module.exports=MenuItem;