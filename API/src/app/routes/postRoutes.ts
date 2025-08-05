import { Router } from "express";
import { CreatePostController } from "../../app/CreatePostController";
import { GetAllWithUserController } from "../../app/controllers/users/GetAllWithUserController";
import { GetMyPostsController } from "../../app/GetMyPostsController";
import { autenticar } from "../../shared/middlewares/authMiddlewares";

const router = Router();
const createPostController = new CreatePostController();
const getAllWithUserController = new GetAllWithUserController();
const getMyPostsController = new GetMyPostsController();

router.post("/", autenticar, async (req, res) => {
  await createPostController.handle(req, res);
});

router.get("/my-posts", autenticar, async (req, res) => {
  await getMyPostsController.handle(req, res);
});

router.get("/posts", async (req, res) => {
  await getAllWithUserController.handle(req, res);
});

export { router as postRoutes };