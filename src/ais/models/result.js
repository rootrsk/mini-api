const mongoose = require("mongoose");

const resultSchema  = new mongoose.Schema({
    test_name:{
        type:String,
        required:true,
    },
    exam_date:{
        type:String,
        type:Date
    },
    results:[{
        name:{
            type:String,
        },
        roll_code:{
            type: Number
        },
        roll_no:{
            type: Number
        },
        marks:{
            type:Number
        },
        percentage:{
            type:Number
        }
    }]
})