import { BookRepository } from "../../repositories/BookRepository";

export class ListBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute() {
    return this.bookRepository.findAll();
  }
}
