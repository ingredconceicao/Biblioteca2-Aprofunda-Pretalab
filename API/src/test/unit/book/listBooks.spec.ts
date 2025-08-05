import { ListBooks } from '../../../core/usecases/books/ListBook';
import { BookRepository } from '../../../core/repositories/BookRepository';
import { Book } from '../../../core/entities/Book';

describe('ListBooks use case', () => {
  let mockRepo: jest.Mocked<BookRepository>;
  let listBooks: ListBooks;

  beforeEach(() => {
    mockRepo = {
      findAll: jest.fn(),
    } as unknown as jest.Mocked<BookRepository>;

    listBooks = new ListBooks(mockRepo);
  });

  it('deve retornar todos os livros', async () => {
    const book1 = new Book('Título 1', 'Autor 1', 2000, 'Físico', 100, ['Gênero'], 'Português');
    const book2 = new Book('Título 2', 'Autor 2', 2001, 'Digital', 200, ['Outro'], 'Inglês');
    mockRepo.findAll.mockResolvedValue([book1, book2]);

    const result = await listBooks.execute();

    expect(mockRepo.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual([book1, book2]);
  });
});
