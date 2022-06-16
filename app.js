const express = require('express'); 
const app = express();
app.use(express.static('view'))

app.get("/", (req,resp)=>{
    resp.sendFile('index.html');
});

app.listen(2022,()=>{
    console.log(`App works at 2022 port`);
});