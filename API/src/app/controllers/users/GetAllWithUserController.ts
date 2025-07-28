import { GetAllwithUser } from "../../../core/usecases/users/GetAllWithuser";
import { MongoPostRepository } from "../../../infra/database/users/mongoPostRepository";
import { Request, Response } from "express"

export class GetAllWithUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const postRepo = new MongoPostRepository();
      const getPosts = new GetAllwithUser(postRepo);
      const result = await getPosts.execute();

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: "error ao buscar posts" });
    }
  }
}