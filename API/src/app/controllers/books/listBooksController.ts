import { Request, Response } from "express";
import { MongoBookRepository } from "../../../infra/database/book/MongoBookRepository";
import { ListBooks } from "../../../core/usecases/books/ListBook";

export class ListBooksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const bookRepository = new MongoBookRepository();
    const listBooks = new ListBooks(bookRepository);
    const books = await listBooks.execute();

    return res.status(200).json(books);
  }
}
