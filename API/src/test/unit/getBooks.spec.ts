
import { BookRepository } from '../../core/repositories/BookRepository';
import { Book } from '../../core/entities/Book';
import { GetBookById } from '../../core/usecases/books/GetBook';

describe('GetBookById use case', () => {
  let mockRepo: jest.Mocked<BookRepository>;
  let getBookByIdUseCase: GetBookById;

  beforeEach(() => {
    mockRepo = {
      findById: jest.fn(),
    } as unknown as jest.Mocked<BookRepository>;

    getBookByIdUseCase = new GetBookById(mockRepo);
  });

  it('deve retornar o livro quando existir', async () => {
    const book = new Book('Título', 'Autor', 1990, 'Físico', 300, ['Drama'], 'Português');
    mockRepo.findById.mockResolvedValue(book);

    const result = await getBookByIdUseCase.execute('qualquer-id');

    expect(mockRepo.findById).toHaveBeenCalledWith('qualquer-id');
    expect(result).toBe(book);
  });

  it('deve lançar erro quando o livro não for encontrado', async () => {
    mockRepo.findById.mockResolvedValue(null as any);

    await expect(getBookByIdUseCase.execute('id-inexistente')).rejects.toThrow();
    expect(mockRepo.findById).toHaveBeenCalledWith('id-inexistente');
  });
});

