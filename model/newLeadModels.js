import mongoose from 'mongoose'

const newLeadSchema = mongoose.Schema({
    fullName:{type: String, required: false},
    email:{type: String, required: false, unique:true},
    message:{type: String, default:''},
    phone:{type: String, required: false},
} ,    
{timestamps: true}
)

var NewLeadModel = mongoose.model("landingpage", newLeadSchema);

export default NewLeadModel;
