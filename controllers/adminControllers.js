import asyncHandler from 'express-async-handler';
import NewLeadModel from '../model/newLeadModels.js';




export const dashBoard = asyncHandler(async (req, res) => {
    return res.json({message: 'hello'});
});
export const login = asyncHandler(async (req, res) => {
    console.log(req.query)
    return res.json({message: 'you are logged in'});
});

export const getAllUsers = asyncHandler(async (req, res) => {
    console.log(req)
    const getUsers = await NewLeadModel.find();
    return res.status(200).json({message: 'ok'})
})
