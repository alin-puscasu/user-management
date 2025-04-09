import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js";
import bcrypt from "bcrypt"

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    })
}

export const createUser = async (req, res, next) => {
    const {name, email, role, password} = req.body;
    const hasedPassword = await bcrypt.hash(password, 10)
    try{
        const newUser = await createUserService(name, email, hasedPassword, role);
        handleResponse(res, 201, "User created successfully", newUser)
    }catch(err){
        next(err);
    }
}

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUsersService();
        handleResponse(res, 200, "User fetched successfully", users)
    }catch(err){
        next(err);
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User fetched successfully", user)
    }catch(err){
        next(err);
    }
}

export const getUserByEmail = async (req, res, next) => {
    try{
        const user = await getUserByEmail(req.params.email);
        if(!user) return handleResponse(res, 404, "User with this email not found");
        handleResponse(res, 200, "User fetched successfully", user)
    }catch(err){
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const {name, email, role} = req.body;
    try{
        const updatedUser = await updateUserService(name, email, role, req.params.id);
        if(!updatedUser) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User updated successfully", updatedUser)
    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await deleteUserService(req.params.id);
        if(!deletedUser) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User deleted successfully", deletedUser)
    }catch(err){
        next(err);
    }
}

export const checkPassword = async (enteredPassword, hashedPassword) => {
    return await bcrypt.compare(enteredPassword, hashedPassword);
};
