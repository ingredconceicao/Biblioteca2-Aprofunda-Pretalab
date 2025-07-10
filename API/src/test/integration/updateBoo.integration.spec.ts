import request from "supertest";
import app from "../../index";

describe('PUT /books/:id', () => {
  let bookId: string;

  beforeAll(async () => {
    const { body } = await request(app).post('/books').send({
      title: 'O Hobbit',
      bookGenres: 'Fantasia',
      status: 'Disponível',
      exemplaryQuantity: 2,
      author: 'Tolkien',
    });
    console.log('Corpo da resposta do POST /books:', body);
    bookId = body.id;
    console.log(bookId);
  });

  it('deve alterar o valor informado com sucesso', async () => {
    const response = await request(app).put(`/books/${bookId}`).send({
      title: 'O Hobbit - Atualizado'
    });

    console.log('PUT response body:', response.body);

    expect(response.status).toBe(200);
    expect(response.body.message).toContain('editado');
  });

  it('não deve alterar o valor se ID não existir', async () => {
    const response = await request(app).put(`/books/123`).send({
      title: 'O Hobbit'
    });

    expect(response.status).toBe(404);
  });
});

