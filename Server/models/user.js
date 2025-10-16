import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    _id: {type: String, required:true},
    email: {type: String, required:true},
    full_name: {type: String, required:true},
    username: {type: String, unique:true},
    bio: {type: String, default: 'hey! iam using Social media'},
    profile_picture: {type: String, default: ''},
    cover_photo: {type: String, default: ''},
    location: {type: String, default: ''},
    followers: [{type: String, ref: 'User'}],
    following: [{type: String, default: ''}],
    connections: [{type : String, ref: 'user'}],
}, {timestamps: true, minimize: false})


const User = mongoose.model('User', userSchema)

export default User