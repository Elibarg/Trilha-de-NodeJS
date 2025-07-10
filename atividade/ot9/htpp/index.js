import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lista inicial de carros
let carros = [
  { nome: "Civic", marca: "Honda", preco: 120000 },
  { nome: "Corolla", marca: "Toyota", preco: 125000 },
  { nome: "HB20", marca: "Hyundai", preco: 85000 },
  { nome: "Onix", marca: "Chevrolet", preco: 78000 },
  { nome: "Argo", marca: "Fiat", preco: 70000 },
  { nome: "Gol", marca: "Volkswagen", preco: 60000 }
];

// Rota raiz
app.get('/', (req, res) => {
  res.send('<h1>API de Carros com Express</h1>');
});

// Listar todos os carros
app.get('/carros', (req, res) => {
  res.json(carros);
});

// Buscar carro por índice
app.get('/carros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(carros[id] || { erro: "Carro não encontrado." });
});

// Adicionar novo carro
app.post('/carros', (req, res) => {
  const { nome, marca, preco } = req.body;
  carros.push({ nome, marca, preco });
  res.json({ mensagem: "Carro adicionado com sucesso!", carros });
});

// Atualizar carro existente
app.put('/carros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, marca, preco } = req.body;

  if (carros[id]) {
    carros[id] = { nome, marca, preco };
    res.json({ mensagem: "Carro atualizado com sucesso!", carros });
  } else {
    res.status(404).json({ erro: "Carro não encontrado." });
  }
});

// Deletar carro
app.delete('/carros/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (carros[id]) {
    carros.splice(id, 1);
    res.json({ mensagem: "Carro deletado com sucesso!", carros });
  } else {
    res.status(404).json({ erro: "Carro não encontrado." });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
