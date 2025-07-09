import bookService from '../../services/bookService';
import BookStorage from '../../storage/bookStorage';

describe('Delete Book', () => {
  beforeEach(() => {
    BookStorage.books = [];
  });

  it('deve remover um livro por id', () => {
    const book = bookService.createBook({
      title: 'Apagar',
      bookGenres: 'Mistério',
      status: 'Indisponível',
      exemplaryQuantity: 1,
      author: 'Desconhecido',
    });
    expect(book.id).toBeTruthy();

    bookService.deleteBookById(book.id);

    expect(BookStorage.books.length).toBe(0);
  });
});
