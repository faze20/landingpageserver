import express from 'express';

import {getAllUsers, dashBoard} from '../controllers/adminControllers.js';

const router = express.Router();

// router.get('dashbooard',dashBoard);
router.get('getUsers',getAllUsers);


export default router;
