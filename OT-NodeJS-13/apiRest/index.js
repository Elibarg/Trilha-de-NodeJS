import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

const buscarUfsPorNome = (nomeUf) =>{
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf).toLowerCase())
}

app.get('/ufs',(req,res)=>{
    const nomeUf = req.query.busca;
    const ufsFiltradas = colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLocaleLowerCase()));
    const restulado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;

    res.json(restulado)
});

app.get('/ufs/:iduf',(req,res)=>{
    const idUf = parseInt(req.params.iduf);
    let mensagemError = "";
    let uf;
});
if (!(isNaN(idUF))){
    uf = colecaoUf.find(u => u.id === idUF);
    if (!uf) {
        mensagemError = "UF não encontrado"
    } else {
        mensagemError = "Requisição inválida"

    }
}
if (uf){
    res.json(uf);
}else{
    res.status(404).send({"erro":mensagemError});
}
app.listen(8080,()=>{
    console.log('Servidor iniciado na porta  http://localhost:8080/ufs')
});