// Importa o módulo Express
const express = require('express');
const app = express();

// Define a porta do servidor
const PORT = 5000;

// Cria um array com a lista de games
const listaGames = [
  { nome: "The Last of Us", studio: "Naughty Dog", preco: 199.90 },
  { nome: "God of War", studio: "Santa Monica Studio", preco: 249.90 },
  { nome: "Hollow Knight", studio: "Team Cherry", preco: 39.99 },
  { nome: "Minecraft", studio: "Mojang Studios", preco: 79.90 },
  { nome: "GTA V", studio: "Rockstar Games", preco: 89.90 },
  { nome: "Celeste", studio: "Matt Makes Games", preco: 29.90 },
  { nome: "Red Dead Redemption 2", studio: "Rockstar Games", preco: 199.90 },
  { nome: "Elden Ring", studio: "FromSoftware", preco: 299.90 },
  { nome: "Fortnite", studio: "Epic Games", preco: 0.00 },
  { nome: "Overwatch", studio: "Blizzard", preco: 149.90 }
];

// Rota principal ("/") apenas para teste
app.get('/', (req, res) => {
  res.send(listaGames);
});

// Rota que retorna a lista de games em formato JSON
app.get('/games', (req, res) => {
  res.json(listaGames);
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
