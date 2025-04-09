import pool from "../config/dbConfig.js";

export const getAllUsersService = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};
export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    return result.rows[0];
};
export const getUserByEmail = async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    return result.rows[0];
};
export const createUserService = async (name, email, password) => {
    const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",[name, email, password]);
    return result.rows[0];
};
export const updateUserService = async (name, email, role, id) => {
    const result = await pool.query("UPDATE users SET name=$1, email=$2, role=$3 WHERE id=$4 RETURNING *",[name, email, role, password, id]);
    return result.rows[0];
};
export const deleteUserService = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *",[id]);
    return result.rows[0];
};