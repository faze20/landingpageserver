import asyncHandler from 'express-async-handler';
import NewLeadModel from '../model/newLeadModels.js';




export const dashBoard = asyncHandler(async (req, res) => {
    return res.json({message: 'hello'});
});

export const getAllUsers = asyncHandler(async (req, res) => {
    const getUsers = await NewLeadModel.find();
    return res.status(200).json({message: 'ok'})
})
