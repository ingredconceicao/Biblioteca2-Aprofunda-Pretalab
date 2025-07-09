import bookService from '../../services/bookService';
import BookStorage from '../../storage/bookStorage';

describe('POST bibliotecaServices', () => {
  beforeEach(() => {
    BookStorage.books = [];
  });

  it('deve criar um livro', () => {
    const created = bookService.createBook({
      title: 'Queria morrer, mas no céu não tem tteokbokki',
      bookGenres: 'ficção juvenil',
      status: 'Disponível',
      exemplaryQuantity: 5,
      author: 'Baek Sehee',
    });
    expect(BookStorage.books).toHaveLength(1);
    expect(created.id).toBeTruthy();
    expect(created.author).toBe('Baek Sehee');
    expect(created).toEqual(expect.objectContaining({
      id: expect.any(String),
      title: 'Queria morrer, mas no céu não tem tteokbokki',
      bookGenres: 'ficção juvenil',
      status: 'Disponível',
      exemplaryQuantity: 5,
      author: 'Baek Sehee',
      created_at: expect.any(String)
      
    }))
  });
});