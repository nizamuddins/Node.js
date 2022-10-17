const express = require('express');
const bodyParser = require('body-parser');
const date = require('./app2')
const config = require("./config");
const mongoose = require('./mongoose');
const port = process.env.PORT || 3000;
const app = express();

var items;
var defaultItems =[{text:"Welcome to your todolist!"},{text:"Hit the + to add new item"},{text:"<-- Hit this to delete item."}];
let data;

var newitems;
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',async (req,res)=>{
 const day = date.day();
let db = await mongoose.db1.find();
items = db;

if(items.length === 0){
    let listItems = new mongoose.db1({text:"Welcome to your todolist!"});
    let listItems1 = new mongoose.db1({text:"Hit the + to add new item"});
    let listItems2 = new mongoose.db1({text:"<-- Hit this to delete item."});
    let result1 = await listItems.save();
    let result2 = await listItems1.save();
    let result3= await listItems2.save();
    res.render('list',{days:day,newItem:items});

}else{
    res.render('list',{days:day,newItem:items});
}
 
})
app.post('/',async (req,res)=>{
    let btn = req.body.button;
    if(req.body.text){

        if(btn ==='work'){
            let listItems = new mongoose.db2(req.body);
            let result = await listItems.save();
            res.redirect('/work');
        }else if(btn === date.day()){
            let listItems = new mongoose.db1(req.body);
            let result = await listItems.save();
            res.redirect('/');
        }else{
            let listItems = new mongoose.db3({
                name:btn,
                text:[req.body.text]
            });
            let result = await listItems.save();
            res.redirect("/"+ btn);
            data = btn;

        }
    }else{
        res.send("eamty")
    }

})

app.get('/work',async(req,res)=>{
    let db = await mongoose.db2.find();
    newitems = db;
if(newitems.length === 0){
    let listItems = new mongoose.db2({text:"Welcome to your todolist!"});
    let listItems1 = new mongoose.db2({text:"Hit the + to add new item"});
    let listItems2 = new mongoose.db2({text:"<-- Hit this to delete item."});
    let result1 = await listItems.save();
    let result2 = await listItems1.save();
    let result3= await listItems2.save();
    res.render('list',{days:'work list',newItem:newitems});

}else{
    res.render('list',{days:'work list',newItem:newitems})

}
})

app.post("/delete",async(req,res)=>{
    let id = req.body.checkbox;
    let db1 = await mongoose.db1.find({_id:id});
    let db2 = await mongoose.db2.find({_id:id});
    let db3 = await mongoose.db3.find({_id:id});

    if(db2.length !== 0){
        await mongoose.db2.deleteOne({_id:id});
        res.redirect("/work")
    }else if(db1.length !== 0){
        await mongoose.db1.deleteOne({_id:id});
        res.redirect("/")
    
    }else if(db3.length !== 0){
        await mongoose.db3.deleteOne({_id:id});
        res.redirect("/"+ data)

    }
})
app.get("/:name",async (req,res)=>{
let param = req.params.name;
if(param !== 'app2.js'&& param !== "favicon.ico"){
    data = param
}
let find = await mongoose.db3.find({name:param});
let find2 = await mongoose.db3.find({});
defaultItems = find2;
if(find2.length === 0){
    let listItems = new mongoose.db3({text:"Welcome to your todolist!"});
    let listItems1 = new mongoose.db3({text:"Hit the + to add new item"});
    let listItems2 = new mongoose.db3({text:"<-- Hit this to delete item."});
    let result1 = await listItems.save();
    let result2 = await listItems1.save();
    let result3= await listItems2.save();

    res.render('list',{days:param,newItem:defaultItems});
}else if(find.length !== 0){
    res.render('list',{days:param,newItem:find2});
    res.render('list',{days:param,newItem:find});
}else{
    res.render('list',{days:param,newItem:find2});

}


})

app.listen(port,()=>{
    console.log("server is started");
})

