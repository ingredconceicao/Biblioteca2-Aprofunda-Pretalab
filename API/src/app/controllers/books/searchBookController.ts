import { Request, Response } from "express";
import { MongoBookRepository } from "../../../infra/database/book/MongoBookRepository";
import { SearchBooks } from "../../../core/usecases/books/SearchBooks";

export class SearchBooksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, author, language } = req.query;

    const bookRepository = new MongoBookRepository();
    const searchBooks = new SearchBooks(bookRepository);

    const books = await searchBooks.execute({
      title: title as string,
      author: author as string,
      language: language as string,
    });

    return res.status(200).json(books);
  }
}
