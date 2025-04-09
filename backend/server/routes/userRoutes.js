import express from "express"
import checkAuthorization from '../middlewares/authMiddleware.js';
//const userController = require('../controllers/userController');

const router = express.Router();

// Rutele protejate cu autentificare
//router.get('/profile', authMiddleware, userController.getProfile);
//router.put('/update', authMiddleware, userController.updateProfile);
router.get('/dashboard', checkAuthorization, (req, res) => {
    res.json({ message: "Welcome to the dashboard!", user: req.user });
});

router.get('/profile', checkAuthorization, (req, res) => {
    res.json({ message: "Welcome to the profile!", user: req.user });
});

export default router;