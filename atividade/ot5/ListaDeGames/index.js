// Importa o módulo Express
const express = require('express');
const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Define a porta do servidor
const PORT = 5000;

// Lista inicial de jogos
let listaGames = [
  { title: "The Last of Us", studio: "Naughty Dog", price: 199.90 },
  { title: "God of War", studio: "Santa Monica Studio", price: 249.90 },
  { title: "Horizon Zero Dawn", studio: "Guerrilla Games", price: 149.90 }
];

// Rota principal ("/") apenas para teste
app.get('/', (req, res) => {
  res.send(listaGames);
});

// Rota que retorna a lista de games em formato JSON
app.get('/games', (req, res) => {
  res.json(listaGames);
});

// Rota para adicionar um novo jogo
app.post('/novogame', (req, res) => {
  const { title, studio, price } = req.body;

  // Validação dos campos
  if (!title || !studio || price === undefined) {
    return res.status(400).json({ erro: "Preencha todos os campos!" });
  }

  // Adiciona o novo jogo na lista
  listaGames.push({ title, studio, price });

  // Retorna mensagem de sucesso e a lista atualizada
  res.json({ mensagem: "Jogo adicionado com sucesso!", listaGames });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
