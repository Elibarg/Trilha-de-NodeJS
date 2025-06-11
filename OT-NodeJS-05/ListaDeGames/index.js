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