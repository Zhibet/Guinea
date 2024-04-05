const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate');


app.get('/',(req,res)=>{
    res.send('working')
})

const port = 3000;
app.listen(port,()=>{
    console.log('live on port 3000')
})
