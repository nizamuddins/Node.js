const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    const date = new Date();
 const options={
    weekday: 'long',month: 'long', day: 'numeric' 
};
const day = date.toLocaleDateString('en-US',options)

res.render('list',{days:day});
 
})


app.listen(3000,()=>{
    console.log("server is started");
})

