const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    text:String, 
    essay:String,
})

module.exports= mongoose.model("blog",dataSchema)
