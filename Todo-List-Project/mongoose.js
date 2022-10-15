const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    text:String, 
})

let db1= mongoose.model("list",dataSchema)
const dataSchema2 = mongoose.Schema({
    text:String, 
})
let db2 = mongoose.model("work",dataSchema2)

module.exports = {db1,db2}
