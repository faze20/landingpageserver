import mongoose from 'mongoose'

const newLeadSchema = mongoose.Schema({
    fullName:{type: String, required: false},
    email:{type: String, required: false, unique:true},
    message:{type: String, default:''},
    phone:{type: String, required: false},
    title:{type: String, required: false},
    message:{type: String, required: false},
    phone:{type: String, required: false},
    location:{type: String, required: false},
    type:{type: String, required: false},
    landingpageName:{type: String, required: false},
    count:{type: Number, required: false},
} ,    
{timestamps: true}
)

var NewLeadModel = mongoose.model("landingpage", newLeadSchema);

export default NewLeadModel;
