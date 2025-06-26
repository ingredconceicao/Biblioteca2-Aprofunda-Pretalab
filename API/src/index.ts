import express from "express";
import bookRoutes from "./routes/bookRoutes"; // <- ajuste o caminho se estiver diferente

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

