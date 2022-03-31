const express = require("express");
const Product = require("../models/poduct.model");

const router = express.Router();


router.get("/", (req, res)=>{
    res.render("index", {})
})

router.post("/", (req, res)=>{
    try{
        res.send("hello this is my profile")
    }
    catch(e){
        return res.status(500).json({status:"failed", message:e.message});

    }
})


module.exports = router;


