import asyncHandler from 'express-async-handler';
import NewLeadModel from '../model/newLeadModels.js';
import dotenv from 'dotenv/config.js';


const adminVerifyCode = process.env.LOGIN_CODE




export const editUser = asyncHandler(async (req, res) => {
    console.log(req.query.id)
    return res.json({message: 'edited'});
});
export const deleteUser = asyncHandler(async (req, res) => {
    //object ._id from request body
    console.log(req.query.id)
    return res.json({message: 'deleted'});
});
export const login = asyncHandler(async (req, res) => {
    const{code}= req.headers;
    if(code === adminVerifyCode){
        console.log(req.query, req.headers)          
        return res.json({message: 'you are logged in'});
    }else{
        return res.status(403).send('Not Authorised')
    }
});
export const registerAdmin = asyncHandler(async (req, res) => {
    console.log(req.query)
    return res.json({message: 'a code was sent to your email, enter it in the box'});
});

export const getAllUsers = asyncHandler(async (req, res) => {
    console.log(req, req.headers)
    const getUsers = await NewLeadModel.find();
    return res.status(200).json({users: getUsers});
});
