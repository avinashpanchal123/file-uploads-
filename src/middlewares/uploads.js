const multer = require("multer")

const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../uploads"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' +( Math.round(Math.rando) * 1E9)
      cb(null,uniquePrefix + '-' + 
      file.originalname )
    }
  })



const upload = multer(
   { storage,
    limits:{
        fileSize:1024*1024*5
    }
}
)

module.exports = upload