import mongoose from 'mongoose';

export async function conectMongo(uri: string) {
  try {
    await mongoose.connect(uri);
    console.log('✅ Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com banco de dados:', error);
    process.exit(1);
  }
}
