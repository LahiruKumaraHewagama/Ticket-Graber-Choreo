// userRoutes.js
import express from 'express';
const router = express.Router();
import UserController from '../controllers/user.js';

// Define routes for user-related endpoints
router.get('/', UserController.get_all_user);
router.post('/sync_user', UserController.sync_user);


export default router;

