var express=require("express");
const getData=require("./getData");
var cors = require('cors');

var app=express();
app.use(cors());

app.get("/",async function(req,res){
    var data = await getData(req.query.q);
    res.send(data);
});
app.listen(7000);
console.log('Server running on PORT 7000');