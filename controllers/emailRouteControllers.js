import asyncHandler from 'express-async-handler';
import NewLeadModel from '../model/newLeadModels.js'



export const sendEmail = asyncHandler(async (req, res) => {
    console.log(req.query.templateParams.phone, req.headers,req.query.templateParams);
    const { phone, to_name , from_name, reply_to, landingpage, locatin , type} = req.query.templateParams;
    let count ;
    // const leadExistBefore = await NewLeadModel.findOne({ email:'afff@trr.com' , phone:'766554434343'});
    const leadExistBefore = await NewLeadModel.findOne({ email:reply_to.trim() , phone:phone.trim()});

    if (leadExistBefore.count > 10) return res.json({error:'Message limit reached'});


    const newLead = await NewLeadModel.create({
        fullName:from_name.trim(),
        title:to_name.trim(),
        email:reply_to.trim(),
        message:message.trim(),
        phone:phone.trim(),
        location:location.trim(),
        type:type.trim(),
        landingpageName:landingpage.trim(),
        count:count++
    });
    if(!newLead) return res.json({error:'database error'});
    return res.status(201).json({message:'Message sent'});
});