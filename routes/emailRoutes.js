import express from 'express';

import {sendEmail} from '../controllers/emailRouteControllers.js';

const router = express.Router();

router.post('/send',sendEmail);


export default router;
