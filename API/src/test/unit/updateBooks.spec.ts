import request from "supertest";
import app from "../../main";

describe('Update Book', () => {
  it('deve atualizar o título do livro', async () => {
  
const createRes = await request(app)
  .post('/books')
  .send({
    title: 'O Hobbit',
    bookGenres: 'Fantasia',
    status: 'Disponível',
    exemplaryQuantity: 1,
    author: 'J.R.R. Tolkien',
  });

const bookId = createRes.body.id;

const updateRes = await request(app)
  .put(`/books/${bookId}`)
  .send({ title: 'O Hobbit - Editado' });

expect(updateRes.status).toBe(200);
expect(updateRes.body.message).toContain('editado');
  });
});
