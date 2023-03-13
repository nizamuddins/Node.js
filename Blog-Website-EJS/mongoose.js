const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    text:String,
    img:{
        data: Buffer,
        contentType: String
    },
    essay:String,
})

module.exports= mongoose.model("blog",dataSchema)
