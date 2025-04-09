import jwt from "jsonwebtoken"
import { secretKey } from "../config/jwtConfig.js"

function generateToken(user) {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, secretKey, {expiresIn: "1h"})
}

export default generateToken