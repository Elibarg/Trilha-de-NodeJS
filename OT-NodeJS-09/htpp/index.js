import express from "express";
const app = express();
var carros=["fiesta","saveiro"];
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>
res.send("<h3>Rotas no express</h3><p>Rota '/'")
);
app.get("/sobre",(req,res)=>
res.send("<h3>Rotas no express</h3><p>Vamos aprender a utilizar Rotas com o express")
);
app.get("/users/:name",(req,res)=>{
    return res.json([name]);
});

app.post("/cars/",(req,res)=>{
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros(carros.length -1)]);
});

app.post("/cars/:id",(req,res)=>{
    let id = req.params.id;
    return res.json([carros[id]]);
});

app.put('/cars/update/:id',(req,res)=>{
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});
app.put('/cars/delet/:id',(req,res)=>{
    let id = req.body.id;
    carros[id] = null;
    return res.json(carros[id]);
});

app.listen(3000,()=>
console.log("servidor iniciado na porta http://localhost:3000")
);