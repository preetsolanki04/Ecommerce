const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({

    product_id:{
        type:String,
        unique:String,
        trim:true,
        required:true,
    },

    title:{
        type:String,
        trim:true,
        required:true,
    },

    price:{
        type:Number,
        trim:true,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    content:{
        type:String,
        required:true,
    },

    images:{
        type:Object,
        required:true,
    },

    category:{
        type:String,
        required:[true, "Category is required"],
    },

    checked:{
        type:Boolean,
        required:false,
    },

    sold:{
        type:Number,
       default:0,
    },

},{
    timestamps:true,
})

module.exports = mongoose.model("product",productSchema)