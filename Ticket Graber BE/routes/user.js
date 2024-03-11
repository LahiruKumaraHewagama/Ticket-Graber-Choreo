// userRoutes.js
import express from 'express';
const router = express.Router();
import UserController from '../controllers/user.js';

// Define routes for user-related endpoints
router.post('/sync_user', UserController.sync_user);

export default router;

