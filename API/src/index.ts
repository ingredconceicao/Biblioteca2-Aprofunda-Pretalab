import express from "express";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


