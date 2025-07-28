import { Request, Response } from 'express';
import { CreateBook } from '../../../core/usecases/books/CreateBook';
import { MongoBookRepository } from '../../../infra/database/book/MongoBookRepository';


const bookRepository = new MongoBookRepository();
const createBook = new CreateBook(bookRepository); 

export const BookController = {
  async create(req: Request, res: Response) {
    try {
      const {
        title,
        author,
        publishedYear,
        format,
        pages,
        genres,
        language
      } = req.body;

      const book = await createBook.execute({
        title,
        author,
        publishedYear,
        format,
        pages,
        genres,
        language
      });

      return res.status(201).json(book);
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}
