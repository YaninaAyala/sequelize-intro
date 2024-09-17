import { Router } from "express";
import userRouter from "./users";

const indexRouter = Router();

indexRouter.use("/users", userRouter);

export default indexRouter;
