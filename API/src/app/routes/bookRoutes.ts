import { Router } from "express";
import { BookController } from "../controllers/books/bookController";
import { ListBooksController } from "../../app/controllers/books/listBooksController";
import { SearchBooksController } from "../../app/controllers/books/searchBookController";

const router = Router();
const listBooksController = new ListBooksController();
const searchBooksController = new SearchBooksController();

router.get("/books/search", (req, res) => searchBooksController.handle(req, res));
router.post("/books", BookController.create);
router.get("/books", (req, res) => listBooksController.handle(req, res));

export default router;
