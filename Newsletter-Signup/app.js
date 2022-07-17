const express = require('express');
const bodyParsrer = require('body-parser');
const request = require('request');

const https = require('https');

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

const data = {

members:[
{
    email_address:emailAddress,
    status:"subscribed",
    merge_fields:{
    FNAME:firstName,
    LNAME:lastNmae,
  }  
}

]


}

const jsondata = JSON.stringify(data);
const url = "https://us11.api.mailchimp.com/3.0/lists/454e9390d8/";

const option={
method:'POST',
auth:'nizam:ca1d4868b500b72211f532a38f032122-us11',
}


const request = https.request(url,option,(response)=>{
if(response.statusCode === 200){
    res.send('succesfull')
}else{
    res.send('unsuccessfull')
}

response.on('data',(data)=>{
    console.log(JSON.parse(data))
})

})
request.write(jsondata);
request.end();
})


app.listen(3000,()=>{
    console.log('server is activated')
})


// API key
// d58aa9def308015717e4e39ae74a241b-us11

// audience_id
// 454e9390d8