import { Request, Response } from 'express';
import bookService from '../services/bookService';

export const createPost = (req: Request, res: Response): void => {
  const { title, bookGenres, status, exemplaryQuantity, author } = req.body;

  const newBook = bookService.createBook({
    title,
    bookGenres,
    status,
    exemplaryQuantity,
    author,
  });

  res.status(201).json({
    message: `New book, ${newBook.title}, created!!`,
    id: newBook.id,
  });
};

export const listPosts = (req: Request, res: Response): void => {
  const books = bookService.getAllBooks();
  res.status(200).json(books);
};

export const updatePost = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedBook = bookService.updateBook(id, req.body);

  if (!updatedBook) {
    res.status(404).json({ message: `Book com ${id} não encontrado` });
    return;
  }

  res.status(200).json({ message: `Book com id:${id} editado com sucesso!!` });
};

export const deletePost = (req: Request, res: Response): void => {
  const { id } = req.params;
  bookService.deleteBookById(id);

  res.status(204).json({ message: `Texto com id:${id} excluído com sucesso` });
};




