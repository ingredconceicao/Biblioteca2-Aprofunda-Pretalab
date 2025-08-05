import { CreateBook, ICreateBookInput } from '../../core/usecases/books/CreateBook';
import { BookRepository } from '../../core/repositories/BookRepository';
import { Book } from '../../core/entities/Book';

describe('CreateBook use case', () => {
  let mockRepo: jest.Mocked<BookRepository>;
  let createBookUseCase: CreateBook;

  beforeEach(() => {
 
    mockRepo = {
      save: jest.fn(),
     
    } as unknown as jest.Mocked<BookRepository>;

    createBookUseCase = new CreateBook(mockRepo);
  });

  it('deve criar um livro e chamar bookRepository.save com os dados corretos', async () => {
  
    const input: ICreateBookInput = {
      title: 'Dom Casmurro',
      author: 'Machado de Assis',
      publishedYear: 1899,
      format: 'Físico',
      pages: 256,
      genres: ['Romance', 'Clássico'],
      language: 'Português',
    };

  
    const savedBook = new Book(
      input.title,
      input.author,
      input.publishedYear,
      input.format,
      input.pages,
      input.genres,
      input.language
    );
 

    mockRepo.save.mockResolvedValue(savedBook);

 
    const result = await createBookUseCase.execute(input);

    expect(mockRepo.save).toHaveBeenCalledTimes(1);
    
    expect(mockRepo.save).toHaveBeenCalledWith(expect.objectContaining({
      title: input.title,
      author: input.author,
      publishedYear: input.publishedYear,
      format: input.format,
      pages: input.pages,
      genres: input.genres,
      language: input.language,
    } as Partial<Book>));

    expect(result).toBe(savedBook);
  });
});
