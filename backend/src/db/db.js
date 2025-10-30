const mongoose=require("mongoose");


function connectDB(){



    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{

       console.log("MongoDb connected sucessfully");
       
    })
}

module.exports =connectDB;