// all temporaries thrid partie in service folder 




var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.PUBLICKEY,
    privateKey : process.env.PRIVATEKEY,
    urlEndpoint :process.env.URLENDPOINT
});
async function uploadFile(file, fileName) {

    const result = await imagekit.upload({
       
        file,
        fileName,
        folder: 'mern14-audio'

    })
     return result


   
}



module.exports = uploadFile



