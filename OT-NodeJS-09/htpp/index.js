import Express from 'express';

const app = Express();
let carros = ['ftesta', 'saveiro'];

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json()); // Adicionado para lidar com JSON

// Rota principal
app.get('/', (req, res) => {
    res.send("<h3>Rotas no Express</h3><p>Rota '/'</p>");
});

// Rota sobre
app.get('/sobre', (req, res) => {
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express</p>");
});

// Rota para usuários
app.get('/users/:name', (req, res) => {
    return res.json([req.params.name]);
});

// Rota para adicionar carros (POST)
app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros.push(name);
    return res.json(carros[carros.length - 1]);
});

// Rota para obter carro por ID (GET)
app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json(carros[id]);
});

// Rota para atualizar carro (PUT)
app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

// Rota para deletar carro (DELETE)
app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; // deletar item
    return res.json(carros[id]);
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor http://localhost:3000');
});