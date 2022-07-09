const express = require("express");

const app = express();

const https = require('https')
app.get('/',(req,res)=>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric&appid=c0f545e348cdc913806ccf7e123b6117"

    https.get(url,(response)=>{
       console.log(response.statusCode)
   response.on('data',(data)=>{
       const weather = JSON.parse(data)
   const temp = weather.main.temp;
const description = weather.weather[0].description;
const icon = weather.weather[0].icon
const url2 = 'http://openweathermap.org/img/wn/'+ icon+'@2x.png';

res.write("<p>current weather condition is " + description +"</p>");
res.write("<h2>Temp of hyderabad is " + temp + "</h2>");
res.write("<img src="+url2+">")
res.send();

})
   
   })

})




app.listen(3000,()=>{
    console.log("The server is activated")
})