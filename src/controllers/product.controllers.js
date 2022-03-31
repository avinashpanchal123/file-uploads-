const express = require("express");
const Product = require("../models/poduct.model");
const upload = require("../middlewares/uploads")
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("index", {})
})

// router.post("/", upload.single("productImages", [5]), async(req, res)=>{
 
//     try{
//        const product = await Product.create(
//            {
//                name : req.body.name,
//                price:req.body.price,
//                img_urls: req.file.path
//            }
//        )
//        res.send("your product has been uploaded")
//     }
//     catch(e){
//         return res.status(500).json({status:"failed", message:e.message});

//     }
// })


router.post("/", upload.array("productImages", [10]), async(req, res)=>{
    const filePaths = req.files.map((file)=>file.path)
    try{
       const product = await Product.create(
           {
               name : req.body.name,
               price:req.body.price,
               img_urls: filePaths
           }
       )
       res.send("your product has been uploaded")
    }
    catch(e){
        return res.status(500).json({status:"failed", message:e.message});

    }
})


module.exports = router;


