import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const User = new Schema({
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const UserData = mongoose.model("User",User)


export default UserData

