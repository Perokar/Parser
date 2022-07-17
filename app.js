const express = require('express'); 
const app = express();
// const bodyParser = require('body-parser');
// app.use(express.static('view'))
const {startParse} = require('./Parse');
const url= 'https://ukrparts.com.ua/category/komplekt-stsepleniya/c-134/';
startParse(url)

// app.get("/", (req,resp)=>{
//     resp.sendFile('index.html');
// });
// app.post('/cat',(req,resp)=>{
//     console.log(req);
//     response.send("succes");
// })

// app.listen(2022,()=>{
//     console.log(`App works at 2022 port`);
// });