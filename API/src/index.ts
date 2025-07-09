import express from 'express';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

export default app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}






