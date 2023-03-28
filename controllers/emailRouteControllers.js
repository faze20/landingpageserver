import asyncHandler from 'express-async-handler';
import NewLeadModel from '../model/newLeadModels.js'



export const sendEmail = asyncHandler(async (req, res) => {
    console.log(req.query.templateParams.phone, req.headers,req.query.templateParams);
    const { phone, to_name , from_name, reply_to, landingpage,message, location , type} = req.query.templateParams;

    const leadExistBefore = await NewLeadModel.findOne({ email:reply_to.trim()});

    if(leadExistBefore){
        if(leadExistBefore.count>10) return res.json({error:'This Email Message limit reached'});
        await NewLeadModel.updateMany(
            {email:reply_to.trim()},
            {
              $push: {
                messagesArray: {message:message.trim()}, 
                enquiryTypeArray:{type},
                landingpagesNameArray:{landingpage},
            },
              $currentDate: { lastModified: true }
            }
        )
        return res.status(201).json({message:'Message sent'});

    }else {

        const newLead = await NewLeadModel.insertMany({
            fullName:from_name.trim(),
            title:to_name.trim(),
            email:reply_to.trim(),
            phone:phone.trim(),
            location:location.trim(), //seo location of landing page
            count:1  ,
            messagesArray: [message.trim()], 
            enquiryTypeArray:[type],
            landingpagesNameArray:[landingpage], 
        });
        if(!newLead) return res.json({error:'database error'});
        return res.status(201).json({message:'Message sent'});
  };
});