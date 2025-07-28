import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function conectMongo() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('❌ MONGO_URI não definida no .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com banco de dados:', error);
    process.exit(1);
  }
}

