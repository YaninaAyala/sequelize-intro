import { NextFunction, Request, Response } from "express";
import UserService from "../services/users";

class UserController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAll();
      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }
}
export default UserController;
