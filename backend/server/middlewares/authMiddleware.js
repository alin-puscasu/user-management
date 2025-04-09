import jwt from "jsonwebtoken";
import { secretKey } from "../config/jwtConfig.js"; // Asigură-te că importi cheia corect

const checkAuthorization = (req, res, next) => {
  const token = req.header("Authorization")?.split(' ')[1]; // Extract doar token-ul

  if (!token) {
    return res.status(403).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default checkAuthorization;
