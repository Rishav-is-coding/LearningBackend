import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique : true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique : true,
            lowercase: true
        },
        password : {
            type: String,
            required : [true, 'password is required']
        },
        isActive: Boolean
    },
    {timestamps: true}
)

export default User = mongoose.model('User' , userSchema)