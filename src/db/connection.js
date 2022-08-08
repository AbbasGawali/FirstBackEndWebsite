const mongoose = require("mongoose");
const dotenv = require("dotenv");

// const DB = "mongodb+srv://luckypirate11:9764808041@cluster0.ht7ja4g.mongodb.net/myfirstcontact?retryWrites=true&w=majority";

dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE;

mongoose.connect(DB,{     //testweb2 is the name of the collection or the database

}).then(()=>{
    console.log("connection SuccessFull");
}).catch(()=>{
    console.log("connnection Failed ");
})






