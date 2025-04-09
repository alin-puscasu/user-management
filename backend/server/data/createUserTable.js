import pool from "../config/dbConfig.js";
import bcrypt from "bcrypt"

const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(50) DEFAULT 'user'
)
    `;

    try{
        pool.query(queryText)
        console.log("User table created if not exists")
    }catch(error){
        console.log("Error creating users table: ", error)
    }

    const hashedPassword = await bcrypt.hash("admin", 10)
    try{
        pool.query('INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) ON CONFLICT (email) DO NOTHING RETURNING id ',
    ["admin", "admin@test.com", hashedPassword, 'admin'])
        console.log("Admin created")
    }catch(error){
        console.log("Error creating admin: ", error)
    }
}

export default createUserTable