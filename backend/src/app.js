// const express = require('express');
// // const app = express();

// // 1.basic server create and api routes



// // app.get('/', (req, res) => {
// //   res.send("hi am respond /");
// // });

// // app.get('/about',(req,res) => {
// //     res.send("this is about page")
// // })

// // 2.way to send data 


// // 2.1 req.body  (post,put/patch)





// let notes=[];

// app.use(express.json());

// // a.POST

// app.post("/notes",(req,res)=>{
 
//     notes.push(req.body)
//     res.status(201).json({
//         message:"note addd succesufully"
//     })
    
     
     

// })

// // b. GET

// app.get("/notes",(req,res)=>{
 
//     res.status(200).json({
//         message:"Notes fetch succesfully",notes
//     })



// })

// // c. DELETE

//  app.delete("/notes/:index",(req,res)=>{
  
//     const index=req.params.index
//     if (isNaN(index) || index < 0 || index >= notes.length) {
//         return res.status(404).json({
//             message: "Invalid index: note not found"
//         });
//     }
//     notes.splice(index, 1);
   
//     res.status(200).json({
//         message:"delte succesfully",notes
//     })

//  })

// // d.PATCH - partial update

// app.patch("/notes/:index",(req,res)=>{
   
//     const index=req.params.index
//     const {title}=req.body;
//     notes[index].title=title;

//       res.status(200).json({
//         message:" field updates sucessfully",notes
//       })


// })

// // e.PUT


// app.put("/notes/:index",(req,res)=>{
   
//     const index=req.params.index
//    const { id, title,content } = req.body;
//      notes[index] = { id, title ,content};

//       res.status(200).json({
//         message:"full updates sucessful",notes
//       })


// })

/// CRUD -create  read  update delete

// 1.create 

// const noteModel=require('./model/note.model');

// app.use(express.json());

//   app.post("/notes",async(req,res)=>{
//       const {title,content}=req.body;
//       await noteModel.create({
         
//         title,content
//       })
//       res.status(201).json({
//         message:"notes created succesfully"
//       })

//   })


//    // 2.read

//    app.get('/notes', async(req,res)=>{
     
//     const notes= await noteModel.find({ })
//     res.status(200).json({
//       message:"notes fetched succesfully",notes
//     })

//    })


//    //3.delte 


//    app.delete('/notes/:id',async(req,res)=>{
       
//     const id=req.params.id

//     await noteModel.findOneAndDelete({
//       _id:id
//     })
//     res.status(200).json({
//       message:"Note deleted sucessfully"
//     })


//    })


//    //4.update


//    app.patch('/notes/:id',async(req,res)=>{

//      const id=req.params.id
//      const {title ,content}=req.body
//      await noteModel.findOneAndUpdate({_id:id},{title,content})

//      res.status(200).json({
//       message:"note update sucessfully"
//      })




//    })
 
const express = require('express');
const songRoutes=require('./Routes/songroute')
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

app.use('/', songRoutes);




module.exports = app;


