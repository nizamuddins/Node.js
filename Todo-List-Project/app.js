const express = require('express');
const bodyParser = require('body-parser');
const date = require('./app2')
const config = require("./config");
const mongoose = require('./mongoose');
const app = express();

var items;
var defaultItems =[{text:"Welcome to your todolist!"},{text:"Hit the + to add new item"},{text:"<-- Hit this to delete item."}];

var newitems;
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',async (req,res)=>{
 const day = date.days();
let db = await mongoose.db1.find();
items = db;
if(items.length === 0){
    res.render('list',{days:day,newItem:defaultItems});

}else{
    res.render('list',{days:day,newItem:items});

}
 
})
app.post('/',async (req,res)=>{
    if(req.body.button==='work'){
        let listItems = new mongoose.db2(req.body);
        let result = await listItems.save();
        res.redirect('/work');
    }else{
        let listItems = new mongoose.db1(req.body);
        let result = await listItems.save();
        res.redirect('/');
    }

})

app.get('/work',async(req,res)=>{
    let db = await mongoose.db2.find();
    newitems = db;
if(newitems.length === 0){
    res.render('list',{days:'work list',newItem:defaultItems});

}else{
    res.render('list',{days:'work list',newItem:newitems})

}
})

app.post("/delete",async(req,res)=>{
    let id = req.body.checkbox;
    let db2 = await mongoose.db2.find({_id:id});
if(db2.length !== 0){
    await mongoose.db2.deleteOne({_id:id});
    res.redirect("/work")
}else{
    await mongoose.db1.deleteOne({_id:id});
    res.redirect("/")
    
}
})

app.listen(3000,()=>{
    console.log("server is started");
})

