const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    const date = new Date();
    const currentday = date.getDay();
var day;
    switch(currentday){
    case 1 :
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;
    case 0:
    day = "Sunday";
    break;
    default:
    console.log('Error current day is equals to: '+ currentday)
}


res.render('list',{days:day});
 
})


app.listen(3000,()=>{
    console.log("server is started");
})

