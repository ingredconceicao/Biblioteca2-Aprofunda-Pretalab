import { Router, Request, Response } from "express";

const router = Router();


interface Livro {
  id: number;
  title: string;
  author: string;
}

interface Texto {
  id: number;
  titulo: string;
  conteudo: string;
  status: "rascunho" | "publicado";
  autor: string;
  data: string;
}


const livros: Livro[] = [
  { id: 1, title: "Queria morrer, mas no céu não tem tteobokki", author: "Baek Sehee" },
  { id: 2, title: "Wicked", author: "Gregory Maguire" },
  { id: 3, title: "Em busca de mim", author: "Viola Davis" }
];

const textos: Texto[] = [];



// Criar texto
router.post("/textos", (req: Request, res: Response) => {
  const { titulo, conteudo, status, autor } = req.body;
  if (!titulo || !conteudo || !status || !autor) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }
  const novoTexto: Texto = {
    id: textos.length + 1,
    titulo,
    conteudo,
    status,
    autor,
    data: new Date().toISOString()
  };
  textos.push(novoTexto);
  res.status(201).json(novoTexto);
});

// Listar todos os textos
router.get("/textos", (req: Request, res: Response) => {
  res.json(textos);
});

// Buscar texto por ID
router.get("/textos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const texto = textos.find(t => t.id === id);
  texto ? res.json(texto) : res.status(404).json({ message: "Texto não encontrado" });
});

// Atualizar texto
router.put("/textos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = textos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: "Texto não encontrado" });

  const { titulo, conteudo, status, autor } = req.body;
  if (!titulo || !conteudo || !status || !autor) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  textos[index] = { ...textos[index], titulo, conteudo, status, autor };
  res.json(textos[index]);
});

// Deletar texto
router.delete("/textos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = textos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: "Texto não encontrado" });

  textos.splice(index, 1);
  res.status(204).send();
});

// --- ROTAS DE LIVROS ---

router.get("/books", (req: Request, res: Response) => {
  res.json(livros);
});

router.get("/books/:id", (req: Request, res: Response) => {
  const livroId = parseInt(req.params.id);
  const livro = livros.find(i => i.id === livroId);
  livro ? res.json(livro) : res.status(404).json({ message: "Livro não encontrado" });
});

router.post("/books", (req: Request, res: Response) => {
  const { title, author } = req.body;
  const livroNovo: Livro = {
    id: livros.length + 1,
    title,
    author
  };
  livros.push(livroNovo);
  res.status(201).json(livroNovo);
});

router.put("/books/:id", (req: Request, res: Response) => {
  const livroId = parseInt(req.params.id);
  const index = livros.findIndex(i => i.id === livroId);
  if (index === -1) return res.status(404).json({ message: "Livro não encontrado" });

  const { title, author } = req.body;
  livros[index] = { id: livroId, title, author };
  res.json(livros[index]);
});

router.delete("/books/:id", (req: Request, res: Response) => {
  const livroId = parseInt(req.params.id);
  const index = livros.findIndex(i => i.id === livroId);
  if (index === -1) return res.status(404).json({ message: "Livro não encontrado" });

  livros.splice(index, 1);
  res.status(204).send();
});

export default router;

