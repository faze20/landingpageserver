import mongoose from 'mongoose'

const newLeadSchema = mongoose.Schema({
    fullName:{type: String, required: false},
    email:{type: String, required: false, unique:true},
    phone:{type: String, required: false},
    title:{type: String, required: false},
    phone:{type: String, required: false},
    location:{type: String, required: false},
    messagesArray:{type:Array},
    enquiryTypeArray:{type:Array},
    landingpagesNameArray:{type:Array},
    count:{type: Number, required: false, default:0},
} ,    
{timestamps: true}
)

var NewLeadModel = mongoose.model("landingpage", newLeadSchema);

export default NewLeadModel;
