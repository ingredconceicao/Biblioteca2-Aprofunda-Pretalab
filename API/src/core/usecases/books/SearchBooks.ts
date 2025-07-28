import { BookRepository } from "../../repositories/BookRepository";
import { SearchParams } from "../../../core/usecases/books/SearchParams";


export class SearchBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute(params: SearchParams) {
    return this.bookRepository.search(params);
  }
}
