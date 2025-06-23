import express from "express";

const app = express();

app.listen(3080, () =>
    console.log("Servidor iniciado na porta http://localhost:3080")
);

let games=[
    {title:"Sea of Thieves",studio:"Rare",price:"30"},
    {title:"WOW",studio:"Blizzard",price:"120"},
    {title:"Valorant",studio:"Riot",price:"0"},
    {title:"COD",studio:"Activision",price:"200"},
    {title:"Minecreft",studio:"Mojang",price:"80"},
    {title:"Halo",studio:"Microsoft",price:"90"}
];
app.get ('/',(req,res) =>
    res.json(games)
 );
 app.use(express.json());

app.post("/novogame",(req,res)=>
{
    const{index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title,studio,price};

    return res.json(games);
});

app.delete("/novogame",(req,res)=>
    {
        const{index} = req.params;
        games.splice(index,1);
    
        return res.json({menssage:"O jogo foi deleltado"});
    });