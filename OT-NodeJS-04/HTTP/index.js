import express from "express";

const app = express();

app.listen(3000, () =>
    console.log("Servidor iniciado na porta http://localhost:3000")
);

 app.get ('/',(req,a) =>
    a.send('<h1 style= "color: blue">CRIANDO UM SERVIDOR EXPRESS.JS</h1>')
 );
 app.get ('/sobre',(req,a) =>
    a.send('<h1 style= "color: blue">Sobre</h1>')
 );
 app.get ('/empresa',(req,a) =>
    a.send('<h1 style= "color: blue">empresa</h1>')
 );
 app.get ('/Contato',(req,a) =>
    a.send('<h1 style= "color: blue">Contato</h1>')
 );