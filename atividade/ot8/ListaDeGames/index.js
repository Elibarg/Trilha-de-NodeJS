// Importa o express
const express = require('express');
const app = express();

// Define a porta que será usada
const PORT = 5000;

// Permite que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Lista inicial com 10 jogos
let listaGames = [
  { title: "The Last of Us", studio: "Naughty Dog", price: 199.90 },
  { title: "God of War", studio: "Santa Monica studio", price: 249.90 },
  { title: "Hollow Knight", studio: "Team Cherry", price: 39.99 },
  { title: "Minecraft", studio: "Mojang", price: 79.90 },
  { title: "GTA V", studio: "Rockstar", price: 89.90 },
  { title: "Celeste", studio: "Matt Makes Games", price: 29.90 },
  { title: "Red Dead Redemption 2", studio: "Rockstar", price: 199.90 },
  { title: "Elden Ring", studio: "FromSoftware", price: 299.90 },
  { title: "Fortnite", studio: "Epic Games", price: 0.00 },
  { title: "Overwatch", studio: "Blizzard", price: 149.90 }
];

// Rota raiz (GET)
app.get('/', (req, res) => {
  res.send("API de Lista de Games está funcionando!");
});

// Rota para listar os jogos (GET)
app.get('/games', (req, res) => {
  res.json(listaGames);
});

// Rota para adicionar novo jogo (POST)
app.post('/novogame', (req, res) => {
  const { title, studio, price } = req.body;

  if (!title || !studio || price === undefined) {
    return res.status(400).json({ erro: "Preencha todos os campos!" });
  }

  listaGames.push({ title, studio, price });
  res.json({ mensagem: "Jogo adicionado com sucesso!", listaGames });
});

// Rota para editar um jogo pelo índice (PUT)
app.put('/novogame/:index', (req, res) => {
  const { index } = req.params;
  let title = req.body.title;
  let studio = req.body.studio;
  let price = req.body.price;

  listaGames[index] = {title,studio,price};
  return res.json(listaGames);
});

app.delete("/games/:index", (req, res) => {
    const { index } = req.params;
    listaGames.splice(index, 1); //  Usa SPLICE para remover o item
    return res.json({ 
        mensagem: "O jogo foi deletado",
        listaAtualizada: listaGames // Retorna a lista atualizada
    });
});
// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
