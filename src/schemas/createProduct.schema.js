import mongoose, {Schema} from "mongoose";


const productSchema = new Schema(
    {
        label: String,
        description: String,
    },
    {
        timestamps: true
    }
);

const Product = mongoose.models.Topic || mongoose.model("Product", productSchema)

export default Product
