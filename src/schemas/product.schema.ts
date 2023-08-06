import mongoose, {Schema} from "mongoose";

const productSchema = new Schema(
    {
        label: String,
        description: String,
        shortDesc: String,
        tags: String,
        currentPrice:String,
        oldPrice:String,
        image: String,
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product
