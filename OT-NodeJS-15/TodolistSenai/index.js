const express = require('express');
const bodyParser = require('body-parse')
const path = require('path');
const app = express();

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extends:true
}));

let tasks = ['Passear com o dog', 'Ir ao mercado','Comprar pão']

app.get('/',(req,res)=>{
    tasks.push(req.body.task)
    res.render('index',{tasksLists:tasks});
});
app.get('deletar/:id', (req,res)=>{
    task = task.filter(function(val,index){
        if(index != req.params.id){
            return val;
        }
    })
    res.render('index',{taskList:task});
})
app.listen(5000,()=>{
    console.log("http://localhost:5000")
})