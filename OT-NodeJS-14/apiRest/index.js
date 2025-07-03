import express from "express";
import {buscarUfs, buscarUfPorId, buscarUfPorNome} from './servicos/servico.js';


const app = express();


app.get('/ufs',(req,res)=>{
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfPorNome(nomeUf) : buscarUfs();
    if(resultado.length > 0)
    {
        res.json(resultado);
    }else{
        res.status(404).send({"erro":"Nenhuma Uf encontrada"});
    }
});

app.get('/ufs/:iduf', (req,res)=>{
    const uf = buscarUfPorId(req.params.iduf);
    if(uf){
        res.json(uf);
    }else if(isNaN(parseInt(req.params.iduf))){
        res.status(404).send({"erro":"Requisição invalida"});
    } else{
        res.status(404).send({"erro":"UF não encontrado"});
    }
});

app.listen(8080,()=>{
    console.console.log("porta 8080");
    
})