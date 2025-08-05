import { UpdateBook, IUpdateBookInput, NotFoundError } from '../../../core/usecases/books/UpdateBook';
import { BookRepository } from '../../../core/repositories/BookRepository';
import { Book } from '../../../core/entities/Book';

describe('UpdateBook use case', () => {
  let mockRepo: jest.Mocked<BookRepository>;
  let updateBook: UpdateBook;

  beforeEach(() => {
    mockRepo = {
      findById: jest.fn(),
      save: jest.fn(),
    } as unknown as jest.Mocked<BookRepository>;

    updateBook = new UpdateBook(mockRepo);
  });

  it('deve atualizar os campos e retornar o livro atualizado', async () => {
    const existing = new Book('Antigo', 'Autor', 1990, 'Físico', 100, ['Drama'], 'Português');
   
    const existingId = existing.id!;

    mockRepo.findById.mockResolvedValue(existing);

    const updates: IUpdateBookInput = {
      id: existingId,
      title: 'Novo Título',
      pages: 120,
    };

    const updatedInstance = new Book(
      'Novo Título',
      existing.author,
      existing.publishedYear,
      existing.format,
      120,
      existing.genres,
      existing.language
    );
    
    (updatedInstance as any).id = existingId;

    mockRepo.save.mockResolvedValue(updatedInstance);

    const result = await updateBook.execute(updates);

    expect(mockRepo.findById).toHaveBeenCalledWith(existingId);
    expect(mockRepo.save).toHaveBeenCalledWith(expect.objectContaining({
      id: existingId,
      title: 'Novo Título',
      pages: 120,
    } as Partial<Book>));
    expect(result).toBe(updatedInstance);
  });

  it('deve lançar NotFoundError se o livro não existir', async () => {
    mockRepo.findById.mockResolvedValue(null as any);

    await expect(updateBook.execute({ id: 'inexistente' } as any)).rejects.toThrow(NotFoundError);
  });
});

