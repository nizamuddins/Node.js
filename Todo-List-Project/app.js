const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var items =[];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    const date = new Date();
 const options={
    weekday: 'long',month: 'long', day: 'numeric' 
};
const day = date.toLocaleDateString('en-US',options)

res.render('list',{days:day,newItem:items});
 
})
app.post('/',(req,res)=>{
let item = req.body.text;
items.push(item);
res.redirect('/')
})

app.listen(3000,()=>{
    console.log("server is started");
})

