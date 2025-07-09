import request from "supertest";
import app from "../../index";

describe('PATCH /book/:id', () => {
  let bookId: string;

  beforeAll(async () => {
    const { body } = await request(app).post('/books').send({
      title: 'O Hobbit',
      bookGenres: 'Fantasia',
      status: 'Disponível',
      exemplaryQuantity: 2,
      author: 'Tolkien',
    });
    console.log('Corpo da resposta do POST /books:', body)
    bookId = body.id;
    console.log(bookId);

  });
  it('alterado o valor informado com sucesso', async () => {
    const response = await request(app).patch(`/book/${bookId}`).send({
      title: 'O Hobbit'
    });

    expect(response.status).toBe(200);

  });


  it('Não deve alterar o valor informado', async () => {
    const response = await request(app).patch(`/book/123`).send({
      title: 'Capitães da Areia'
    });

    expect(response.status).toBe(404);

  });


})




/*import bookService from '../../services/bookService';
import BookStorage from '../../storage/bookStorage';

describe('Update Book', () => {
  beforeEach(() => {
    BookStorage.books = [];
  });

  it('deve atualizar o título do livro', () => {
    const created = bookService.createBook({
      title: 'Antigo',
      bookGenres: 'Drama',
      status: 'Disponível',
      exemplaryQuantity: 1,
      author: 'Autor X',
    });

    const updated = bookService.updateBook(created.id, { title: 'Novo' });
    expect(updated?.title).toBe('Novo');
  });
});
*/