import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type: String, requird: true},
    slug:{type: String, requird: true , unique: true},
    category:{type: String, requird: true},
    image:{type: String, requird: true},
    price:{type: String, requird: true},
    brand:{type: String, requird: true},
    rating:{type: String, requird: true, default: 0},
    numberReviews:{type: String, requird: true, default: 0},
    countInStock:{type: String, requird: true, default: 0},
    description:{type: String, requird: true},
},{
    timestamps: true
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;