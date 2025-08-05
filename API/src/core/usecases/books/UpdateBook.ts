import { Book } from '../../entities/Book';
import { BookRepository } from '../../repositories/BookRepository';

export interface IUpdateBookInput {
  id: string;
  title?: string;
  author?: string;
  publishedYear?: number;
  format?: string;
  pages?: number;
  genres?: string[];
  language?: string;
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class UpdateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(data: IUpdateBookInput): Promise<Book> {
    const existing = await this.bookRepository.findById(data.id);
    if (!existing) {
      throw new NotFoundError(`Livro com id "${data.id}" não encontrado`);
    }


    const updated = new Book(
      data.title ?? existing.title,
      data.author ?? existing.author,
      data.publishedYear ?? existing.publishedYear,
      data.format ?? existing.format,
      data.pages ?? existing.pages,
      data.genres ?? existing.genres,
      data.language ?? existing.language
    );
 
    (updated as any).id = existing.id;
    if ((existing as any).created_at) {
      (updated as any).created_at = (existing as any).created_at;
    }

    return this.bookRepository.save(updated);
  }
}
