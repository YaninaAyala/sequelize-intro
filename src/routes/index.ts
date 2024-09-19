import { Router } from "express";
import userRouter from "./users";
import productsRouter from "./products"

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/products", productsRouter);

export default indexRouter;
