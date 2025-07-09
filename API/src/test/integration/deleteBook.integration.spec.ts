import request from "supertest";
import app from "../../index";

describe('DELETE /books/:id', () => {
  let bookId: string;

  beforeAll(async () => {
    const { body } = await request(app).post('/books').send({
      title: 'Livro a ser deletado',
      bookGenres: 'Suspense',
      status: 'Disponível',
      exemplaryQuantity: 2,
      author: 'Autor Exemplo'
    });

    bookId = body.id;
  });

  it('deve deletar um livro existente', async () => {
    const response = await request(app).delete(`/books/${bookId}`);
    expect(response.status).toBe(204);
  });

  it('deve retornar 204 mesmo que o livro já tenha sido deletado', async () => {
    const response = await request(app).delete(`/books/${bookId}`);
    expect(response.status).toBe(204);
  });
});