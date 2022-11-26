import mongoose from "mongoose";




export const connectdb = ()=>{
    try{
mongoose.connect("mongodb+srv://nabil:nabil@cluster0.wzkkmos.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })

console.log("you are connected");

    }catch(err) {
console.log(err);
    }
}

export default connectdb;