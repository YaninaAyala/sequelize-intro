import { NextFunction, Request, Response } from "express";
import ProductsService from "../services/products";

class ProductsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await ProductsService.getAll();
      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct = await ProductsService.create(req.body);
      res.status(201).json({ data: newProduct });
    } catch (error) {
      next(error);
    }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const affectedProducts = await ProductsService.update(
        req.params.id,
        req.body
      );

      res.status(200).json({ data: affectedProducts });
    } catch (error) {
      next(error);
    }
  }
}
export default ProductsController;
