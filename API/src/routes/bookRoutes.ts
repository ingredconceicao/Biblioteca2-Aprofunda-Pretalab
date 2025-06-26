import { Router, Request, Response } from "express";

const router = Router();

interface Livro {
  id: number;
  title: string;
  author: string;
}

const livros: Livro[] = [
  { id: 1, title: "Queria morrer, mas no céu não tem tteobokki", author: "Baek Sehee" },
  { id: 2, title: "Wiked", author: "Gregory Maguire" },
  { id: 3, title: "Em busca de mim", author: "Viola Davis" },
];

// Obter todos os livros
router.get("/books", (req: Request, res: Response) => {
  res.json(livros);
});

// Obter livro por ID
router.get("/books/:id", (req: Request, res: Response) => {
  const livroId = parseInt(req.params.id);
  const livro = livros.find(i => i.id === livroId);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
});

// Criar novo livro
router.post("/books", (req: Request, res: Response) => {
  const livroNovo: Livro = {
    id: livros.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  livros.push(livroNovo);
  res.status(201).json(livroNovo);
});


// Atualizar livro por ID
router.put("/books/:id", (req: Request, res: Response) => {
  const livroId = parseInt(req.params.id);
  const livroIndex = livros.findIndex(i => i.id === livroId);

  if (livroIndex !== -1) {
    livros[livroIndex] = {
      id: livroId,
      title: req.body.title,
      author: req.body.author,
    };
    res.json(livros[livroIndex]);
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
});


// Deletar livro por ID
router.delete("/books/:id", (req: Request, res: Response) => {
  const livroId = parseInt(req.params.id);
  const livroIndex = livros.findIndex(i => i.id === livroId);

  if (livroIndex !== -1) {
    livros.splice(livroIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
});

export default router;