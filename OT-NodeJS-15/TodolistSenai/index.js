const express = require('express');
const app = express();
const path = require('path');

// Configurações
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Lista de tarefas
let tasksLists = ['Estudar Node', 'Fazer exercícios'];

// Rota principal
app.get('/', (req, res) => {
    res.render('index', { tasksLists }); // <-- IMPORTANTE!
});

// Rota para adicionar tarefa
app.post('/', (req, res) => {
    const novaTarefa = req.body.task;
    if (novaTarefa && novaTarefa.trim() !== '') {
        tasksLists.push(novaTarefa);
    }
    res.redirect('/');
});

// Rota para deletar tarefa por índice
app.get('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (!isNaN(id) && id >= 0 && id < tasksLists.length) {
        tasksLists.splice(id, 1);
    }
    res.redirect('/');
});

app.listen(5000, () => {
    console.log("Servidor rodando em http://localhost:5000");
});
