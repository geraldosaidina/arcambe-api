import { Router } from "express";
import { createUser } from "../controllers/UserController";


const userRouter = Router();

userRouter.post("/user", createUser)

export default userRouter