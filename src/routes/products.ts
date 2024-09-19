import { Router } from "express";
import ProductsController from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/", ProductsController.getAll);
//userRouter.post("/", UserController.create);

export default productsRouter;
