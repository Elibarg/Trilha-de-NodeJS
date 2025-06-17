app.use(express.json());
app.post("/novogame",(req,res)=>
{
   let title = req.body.title;
   let studio = req.body.studio;
   let price = req.body.price;

   console.log(title);
   console.log(studio);
   console.log(price);
   res.send("OK")
});