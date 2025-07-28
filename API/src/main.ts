import { conectMongo } from '../src/infra/database/users/mongooseConection';
import app from './infra/server/server';
import { config } from './config/environment';
import http from 'http';

const DEFAULT_PORT = config.port || 3000;

async function getAvailablePort(startPort: number): Promise<number> {
  const maxPort = startPort + 50; // tenta até 50 portas acima
  for (let port = startPort; port <= maxPort; port++) {
    const isAvailable = await isPortAvailable(port);
    if (isAvailable) return port;
  }
  throw new Error('❌ Nenhuma porta disponível encontrada');
}

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const tester = http
      .createServer()
      .once('error', () => resolve(false))
      .once('listening', function () {
        tester.close();
        resolve(true);
      })
      .listen(port);
  });
}

async function main() {
  try {
    await conectMongo();

    const PORT = await getAvailablePort(DEFAULT_PORT);

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();









