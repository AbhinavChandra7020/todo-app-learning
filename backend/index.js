const express = require('express');
const { todoSchema, todoComplete } = require('./types');
const { todo } = require('./database')
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}));

app.get('/todos', async (req,res) => {
    // fetches all the todos
    const todos = await todo.find();
    res.json(todos);
});

app.post('/todos', async (req,res) =>{
    //allows you to enter your todo
    const createPayload = req.body;
    const parsedPayload = todoSchema.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    }) 
    res.json({
        msg: "Todo has been created"
    })
});

app.put('/completed', async (req,res) =>{
    //lets you mark a todo as done
    const updatePayload = req.body;
    const parsedPayload = todoComplete.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo has been updated"
    })
});

app.listen(3000)