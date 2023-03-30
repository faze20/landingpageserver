import express from 'express';

import {getAllUsers, dashBoard, login} from '../controllers/adminControllers.js';

const router = express.Router();

// router.get('dashbooard',dashBoard);
router.get('/getusers',getAllUsers);
router.post('/login',login);


export default router;
