import mongoose from "mongoose";

const todoSchema = new mongoose({
    content:{
        type : String,
        required : true
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'subtodo'
        }
    ]
} , {timestamps : true})

export default todo = mongoose.model('todo' , todoSchema)