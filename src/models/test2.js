const mongoose = require("mongoose");
const validator = require("validator");


const userScheema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        minLength: 3,
        maxLength: 25
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        minLength:10,
        required:true,
        type:Number
    },
    message:{
        required:true,
        type:String,
        minLength:5
    },
    date: {
        required: true,
        type: Date,
        default: Date.now
    }
})

//test 2 is the name of tbe collections in the database of the mongo db



const test2 = mongoose.model("test2", userScheema);
module.exports = test2;