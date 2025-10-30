const mongoose=require('mongoose');

const noteSchema=new mongoose.Schema({                              // bluprint how DB looks

    title:String,
    content:String
})

const noteModel=mongoose.model("note",noteSchema)                      // used to crud operation

module.exports=noteModel;