import asyncHandler from 'express-async-handler';
import NewLeadModel from '../model/newLeadModels.js'



export const sendEmail = asyncHandler(async (req, res) => {
    console.log(req.query.templateParams.phone, req.headers,req.query.templateParams);

    // const leadExistBefore = await NewLeadModel.findOne({ email:'afff@trr.com' , phone:'766554434343'});
    // // const leadExistBefore = await NewLeadModel.findOne({ email , phone});

    // if (leadExistBefore)  return res.json({error:'You sent a message already'});

    // const newLead = await NewLeadModel.create({
    //   // fullName:fullName.trim(),
    //   // email:email.trim(),
    //   // message:message.trim(),
    //   // phone:phone.trim(),
    //   fullName:'Afeez Badmos',
    //   email:"afeez20@yahoo.com",
    //   message:'i want to know more about front end developer',
    //   phone:'7472498760',
    // });
    // if(!newLead) return res.json({error:'database error'});
    return res.status(201).json({message:'Message sent'});
    // return res.status(400).json({error:'database error'});
});