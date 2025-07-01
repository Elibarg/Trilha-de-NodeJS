import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

app.get('/ufs',(req,res)=>{
    res.json(colecaoUf)
});

app.get('/ufs/:iduf',(req,res)=>{
    const idUF = parseInt(req.params.idUF);
    let mensagemError ="";
    let uf;
    res.json(uf);
});
if (!(isNaN(idUF))){
    uf = colecaoUf.find(u => u.id === idUF);
    if (!uf) {
        mensagemError = "UF não encontrado"
    } else {
        mensagemError = "Requisição inválida"

    }
}
id
if (uf){
    res.json(uf);
}else{
    res.status(404).send();
}
app.listen(8080,()=>{
    console.log('Servidor iniciado na porta  http://localhost:8080/ufs')
});