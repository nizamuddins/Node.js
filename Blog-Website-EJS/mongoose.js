const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    text:String, 
    essay:String,
})

module.exports= mongoose.model("blog",dataSchema)
// const dataSchema2 = mongoose.Schema({
//     text:String, 
// })
// let db2 = mongoose.model("work",dataSchema2)

// const dataSchema3 = mongoose.Schema({
//     name:String,
//     text:[Object] 
// })
// let db3 = mongoose.model("params",dataSchema3)

// module.exports = {db1,db2,db3}
