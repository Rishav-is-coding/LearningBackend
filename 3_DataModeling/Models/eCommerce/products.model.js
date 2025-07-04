import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description : {
        required : true,
        type : String
    },
    name : {
        type : String,
        required : true
    },
    productImage : {
        type : String
    },
    price : {
        type : Number,
        default : 0
    }, 
    stock : {
        type: Number,
        default : 0
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category',
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
} , {timestamps : true}) 

export const Product = mongoose.model('Product' , productSchema)