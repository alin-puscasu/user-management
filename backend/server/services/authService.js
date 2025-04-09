import bcrypt from "bcrypt"
import { getUserByEmail, createUserService } from "../models/userModel.js";
import { checkPassword } from "../controllers/userController.js"
import generateToken from "../utils/jwtUtils.js"

export const signupUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUserService(name, email, hashedPassword, role);
        res.status(201).json({ message: "User registered succesfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export async function loginUser(req, res) {
    const { email, password } = req.body
    try {
        const existingUser = await getUserByEmail(email)
        if(!existingUser) return res.status(401).json({ message: "Invalid credentials" })
        const isPasswordValid = await checkPassword(password, existingUser.password);
        if(!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

        const token = generateToken(existingUser)
        res.json({token: token})
    } catch (error) {
        res.status(401).json({message: "Invalid credentials controller"})
    }
}

