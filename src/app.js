const { application } = require("express");
const express = require("express");
const app = express();
const test2 = require("./models/test2")
const port = process.env.PORT||8001;
require("./db/connection")
const path = require("path");
const hbs = require("hbs");
const { urlencoded } = require("body-parser");
const staticPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

const dotenv = require("dotenv");
app.use(express.urlencoded({extended:false}))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/*",(req,res)=>{
    res.render("404");
})

app.post("/contact",async (req,res)=>{
    try{
        const test2Data = new test2(req.body)
        await test2Data.save();
        res.status(201).render("thank");
    }catch(e){
        res.status(500).send(e);
    }
})


app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})

