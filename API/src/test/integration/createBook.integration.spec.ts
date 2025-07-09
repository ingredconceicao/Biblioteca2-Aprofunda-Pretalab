import request from "supertest";
import app from "../../index";
import BookStorage from "../../storage/bookStorage";

describe('Create Book', () => {
  beforeEach(() => {
    BookStorage.books = [];
  });

  it('deve criar um livro com sucesso', async() => {
    const created = await request(app).post('/books').send({
      title: 'O Hobbit',
      bookGenres: 'Fantasia',
      status: 'Disponivel',
      exemplaryQuantity: 3,
      author: 'J. R. R. Tolkien',
    });
     expect(created.status).toBe(201)
  });
});
