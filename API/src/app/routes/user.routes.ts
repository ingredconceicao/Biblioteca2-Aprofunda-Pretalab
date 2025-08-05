import { Router } from "express";
import { autenticar } from "../../../src/shared/middlewares/authMiddlewares";
import { CreateUserController } from "../../../src/app/controllers/users/CreateUserController";
import { GetUserByIdController } from "../../../src/app/controllers/users/GetUserByldController";
import { UpdateUserByController } from "../../../src/app/controllers/users/UpdateUserByldController";
import { DeleteUserByIdController } from "../../../src/app/controllers/users/DeleteUserByldController";
import AuthController from "../AuthController";

const router = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const updateUserByIdController = new UpdateUserByController();
const deleteUserByIdController = new DeleteUserByIdController();
const login = new AuthController();

// Criar novo usuário
router.post("/users", async (req, res) => {
  await createUserController.handle(req, res);
});

// Login
router.post("/login", async (req, res) => {
  await login.handle(req, res);
});

// Rota protegida
router.get("/me", autenticar, async (req, res) => {
  res.json({ message: "rota protegida", user: req.user });
});

// Buscar usuário por ID
router.get("/users/:id", async (req, res) => {
  await getUserByIdController.handle(req, res);
});

// Atualizar usuário
router.patch("/users/:id", async (req, res) => {
  await updateUserByIdController.handle(req, res);
});

// Deletar usuário
router.delete("/users/:id", async (req, res) => {
  await deleteUserByIdController.handle(req, res);
});

export { router as userRoutes };
