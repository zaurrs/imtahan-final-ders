import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: {type:String, required:true},
    name: {type:String, required:true},
    category: {type:String, required:true},
    price:{type:Number, required:true}
}, {collection: "Products", timestamps:true})

const product = mongoose.model("Products", productSchema)
export default product