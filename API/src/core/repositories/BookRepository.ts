import { Book } from "../entities/Book";
export type SearchParams = { 
  title?: string;
  author?: string;
  language?: string;
};

export interface BookRepository {
  save(book: Book): Promise<Book>;
  findById(id: string): Promise<Book | null>;
  findByTitle(title: string): Promise<Book | null>;
  findAll(): Promise<Book[]>;
  search(params: SearchParams): Promise<Book[]>;
  update(id: string, updatedData: Partial<Book>): Promise<Book | null>;
  delete(id: string): Promise<void>;
}

