const express = require('express');
const bodyParser = require("body-parser") 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{

res.sendFile(__dirname + '/index.html')
})


app.post('/',(req,res)=>{
    
const w = +(req.body.weight);

const h = +(req.body.height);

const bmi = w/(h**2)

res.send("your bmi is " +bmi)
})



app.listen(3000,()=>{

    console.log("Server is activated")

})
