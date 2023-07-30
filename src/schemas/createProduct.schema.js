import mongoose, {Schema} from "mongoose";


const productSchema = new Schema(
    {
        label: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product
