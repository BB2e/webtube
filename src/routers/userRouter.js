import express from "express";
import  { see, edit, remove, logout } from "../controllers/userController";

const userRouter = express.Router();

// const handleEdit = (req, res) => res.send("Edit User")

userRouter.get("/:id", see)
userRouter.get("/logout", logout)
userRouter.get("/edit", edit)
userRouter.get("/remove", remove)
// :변수 >> 변수를 넣을수 있다

export default userRouter;
