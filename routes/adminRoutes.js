import express from 'express';

import {getAllUsers,editUser, deleteUser,registerAdmin, login} from '../controllers/adminControllers.js';

const router = express.Router();

router.get('/getusers',getAllUsers);
router.post('/login',login);
router.delete('/delete',deleteUser);
router.post('/edit',editUser);
router.post('/registeradmin',registerAdmin);


export default router;
