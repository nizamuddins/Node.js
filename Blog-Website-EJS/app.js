const express = require("express");
const bodyParser = require('body-parser');
var _ = require('lodash');

const app = express();

const startingStatement = "Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. "
const about = "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.";
const contact = "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout."
const array = [];

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set("view engine",'ejs');

app.get('/',(req,res)=>{
res.render('home',{page:"Home",para: startingStatement,array:array});

})
app.get('/about',(req,res)=>{
res.render('about',{page:"About",para: about});
    
    })
app.get('/contact',(req,res)=>{
res.render('contact',{page:"Contact",para: about});
        
})

app.get('/compose',(req,res)=>{
    res.render('compose');
            
    })
app.get('/posts/:parameter',(req,res)=>{
const parameter = _.lowerCase(req.params.parameter)

array.forEach((a)=>{
    const a1 = _.lowerCase(a.text)

    const a2 = a.text;
    const a3 = a.postbody;
    
    if(a1 === parameter){

    res.render('another-posts' ,{head:a2,para:a3});

    }
})
   

})
app.post('/compose',(req,res)=>{
var content = {
       text:req.body.text,
       postbody:req.body.postbody,
}
array.push(content);
res.redirect('/')

})


app.listen(5000,()=>{
    console.log("server is activated")
})