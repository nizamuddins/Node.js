const express = require('express');
const https = require('https')

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{

res.sendFile(__dirname+'/index.html');
})


app.post('/',(req,res)=>{
const query = req.body.cityname;
const units = 'metric';
const appid = 'c0f545e348cdc913806ccf7e123b6117';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&units='+units+'&appid='+appid

https.get(url,(response)=>{

response.on('data',(data)=>{

const weather = JSON.parse(data);
const temp = weather.main.temp;
const city = weather.name
res.write(`<h1>temperature of ${query} is ${temp} </h1>`);
res.write(`<h3>City Name:${city}</h3>`);
const image = weather.weather[0].icon;
const img = `http://openweathermap.org/img/wn/${image}@2x.png`
res.write(`<img src=${img}>`)
res.send();
})

})


})



app.listen(3000,()=>{
    console.log('seerver is started')
})