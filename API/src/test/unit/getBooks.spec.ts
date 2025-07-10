import bookService from '../../services/bookService';
import BookStorage from '../../storage/bookStorage';

describe('Get Books', () => {
  beforeEach(() => {
    BookStorage.books = [];
  });

  it('deve listar todos os livros', () => {
    bookService.createBook({
      title: 'O Hobbit',
      bookGenres: 'Fantasia',
      status: 'Disponível',
      exemplaryQuantity: 2,
      author: 'Tolkien',
    });

     expect(BookStorage.getAll().length).toBe(1);
    
      const listBook = bookService.getAllBooks();
    
      expect(listBook[0].title).toBe('O Hobbit');
    

  });
});
