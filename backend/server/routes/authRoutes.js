import express from "express"
import cors from "cors"
import { loginUser, signupUser } from "../services/authService.js"
import { validateLogin, validateSignup} from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/login", validateLogin, loginUser);
router.post("/signup", validateSignup, signupUser);

router.use(cors());

export default router;