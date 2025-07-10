const express = require('express');
const app = express();
const path = require('path');

// Configurações do Express
app.use(express.urlencoded({ extended: true })); // Permite receber dados de formulários
app.use(express.json()); // Permite receber dados no formato JSON
app.set('view engine', 'ejs'); // Configura o EJS como template engine
app.set('views', path.join(__dirname, 'views')); // Define a pasta de views
app.use(express.static(path.join(__dirname, 'public'))); // Define a pasta de arquivos estáticos

// Array inicial de tarefas (nosso "banco de dados" temporário)
let tasksLists = ['Estudar Node', 'Fazer exercícios'];

// Rota principal - exibe a lista de tarefas
app.get('/', (req, res) => {
    // Renderiza a view index.ejs passando o array de tarefas
    res.render('index', { tasksLists });
});

// Rota para adicionar nova tarefa (via POST)
app.post('/', (req, res) => {
    const novaTarefa = req.body.task; // Pega a tarefa do corpo da requisição
    
    // Validação: verifica se a tarefa não está vazia
    if (novaTarefa && novaTarefa.trim() !== '') {
        tasksLists.push(novaTarefa); // Adiciona a nova tarefa ao array
    }
    
    // Redireciona de volta para a página principal
    res.redirect('/');
});

// Rota para deletar tarefa por índice
app.get('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id); // Converte o parâmetro para número
    
    // Validação: verifica se o ID é um número válido e está dentro dos limites do array
    if (!isNaN(id) && id >= 0 && id < tasksLists.length) {
        tasksLists.splice(id, 1); // Remove o item do array na posição do ID
    }
    
    // SOLUÇÃO DO BUG: Redireciona para a página principal após deletar
    // Isso evita que o usuário fique na rota /deletar/id e possa recarregar a página
    // causando múltiplas deleções
    res.redirect('/');
});

// Inicia o servidor na porta 5000
app.listen(5000, () => {
    console.log("Servidor rodando em http://localhost:5000");
});