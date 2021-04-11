var express = require('express');
var app=express();

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('home.ejs');
})
app.listen(3000,()=>console.log("Server Running at port 3000"))