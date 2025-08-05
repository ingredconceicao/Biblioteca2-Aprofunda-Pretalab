import { Book } from '../../entities/Book';
import { BookRepository } from '../../repositories/BookRepository';

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class GetBookById {
  constructor(private bookRepository: BookRepository) {}

  async execute(id: string): Promise<Book> {
    const book = await this.bookRepository.findById(id);
    if (!book) {
      throw new NotFoundError(`Livro com id "${id}" não encontrado`);
    }
    return book;
  }
}
