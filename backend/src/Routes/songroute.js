const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadFile = require("../service/service.storage");
const id3 = require('node-id3');
const songModel = require('../model/song.model'); 

const upload = multer({ storage: multer.memoryStorage() });                    // storage save in ram

router.post('/songs', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const buffer = req.file.buffer;                                                   // storage save in ram-->buffer 
    const base64File = Buffer.from(buffer).toString("base64");                        //  base64 text ke form m store karta h imagekit m upload m assani rehti h

    // Upload audio file
    const audioUpload = await uploadFile(base64File, 'audio');                          // base64 wali file upload ho gyi      

    // Extract metadata
    const metadata = id3.read(buffer);                                                   // meta data nikal liya

    let coverImageUrl = null;
    if (metadata.image && metadata.image.imageBuffer) {
      const coverBase64 = Buffer.from(metadata.image.imageBuffer).toString("base64");              // song ke image ke liye 
      const coverUpload = await uploadFile(coverBase64, 'coverImage');
      coverImageUrl = coverUpload.url;
    }

    // Save song to database
    const song = await songModel.create({
      title: metadata.title || req.body.title || "Unknown Title",                                    
      artist: metadata.artist || req.body.artist || "Unknown Artist",
      album: metadata.album || req.body.album || "Unknown Album",
      releaseDate: metadata.year || req.body.releaseDate || "Unknown Year",
      audioUrl: audioUpload.url,
      coverImage: coverImageUrl
    });

    return res.status(201).json({
      message: "Song uploaded successfully",
      song
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error uploading file", error: err.message });
  }
});


router.get('/songs', async (req, res) => {
  try {
    const songs = await songModel.find();
    res.json({ songs });
  } catch (err) {
    res.status(500).json({ message: "Error fetching songs", error: err.message });
  }
});










module.exports = router;
