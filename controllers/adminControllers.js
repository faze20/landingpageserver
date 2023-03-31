import asyncHandler from 'express-async-handler';
import NewLeadModel from '../model/newLeadModels.js';




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
    console.log(req.query)
    return res.json({message: 'you are logged in'});
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
