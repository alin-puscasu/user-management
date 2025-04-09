import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/auth", authRoutes)
app.use("/", userRoutes)

//Error handling middleware
app.use(errorHandling)

//Create table before starting server
createUserTable();

//Server running
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})