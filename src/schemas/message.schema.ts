import mongoose, {Schema} from "mongoose";


const messageSchema = new Schema(
    {
        text: String,
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema)

export default Message
