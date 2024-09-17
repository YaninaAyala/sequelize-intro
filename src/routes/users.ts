import { Router } from "express";
import UserController from "../controllers/users";

const userRouter = Router();

userRouter.get("/", UserController.getAll);
//userRouter.post("/", UserController.create);

export default userRouter;
