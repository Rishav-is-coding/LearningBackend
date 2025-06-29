import mongoose from "mongoose";

const subTodoSchema = new mongoose({
    content :{
        type : String,
        required : true
    },
    complete : {
        type: Boolean,
        default : false
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
} , {timestamps: true})

export default subtodo = mongoose.model('subtodo' , subTodoSchema)