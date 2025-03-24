import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import userRoutes from "./routes/userRoutes.js"
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoutes);

//Error handling middleware
app.use(errorHandling)

//Create table before starting server
createUserTable();

//Server running
app.listen(port, () =>{
  console.log(`Server is running on http://localhost:${port}`);
})