import 'dotenv/config';
import express from 'express';
import bookRoutes from './routes/bookRoutes';
import { conectMongo } from './infra/database/mongooseConection';

const app = express();

app.use(express.json());
app.use('/books', bookRoutes);


const URI = process.env.MONGO_URI;
if (!URI || URI.trim() === '') {
  throw new Error('❌ MONGO_URI não está definida ou está vazia no .env');
}


conectMongo(URI);

export default app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('🚀 Servidor rodando na porta 3000');
  });
}






