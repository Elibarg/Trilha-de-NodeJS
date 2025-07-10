import express from 'express';
import colecaoGames from './dados/dados.js';

const app = express();

// Função para buscar games por título
const buscarGamesPorTitulo = (titulo) => {
    return colecaoGames.filter(game => 
        game.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
};

// Rota para listar todos os games ou buscar por título
app.get('/games', (req, res) => {
    const titulo = req.query.busca;
    const resultado = titulo ? buscarGamesPorTitulo(titulo) : colecaoGames;
    
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhum game encontrado" });
    }
});

// Rota para buscar game por ID
app.get('/games/:id', (req, res) => {
    const idGame = parseInt(req.params.id);
    let mensagemErro = "";
    let game;

    if (!(isNaN(idGame))) {
        game = colecaoGames.find(g => g.id === idGame);
        if (!game) {
            mensagemErro = 'Game não encontrado';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});