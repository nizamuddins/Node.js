const express = require('express');
const bodyParsrer = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParsrer.urlencoded({extended:true}))


app.use(express.static('public'))
app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/signup.html')
})

app.post('/',(req,res)=>{
const  firstName   = req.body.firstname
const  lastNmae   = req.body.lastname
const  emailAddress = req.body.emailaddress
console.log(firstName,lastNmae,emailAddress)


})


app.listen(3000,()=>{
    console.log('server is activated')
})