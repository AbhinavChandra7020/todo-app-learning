const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abhinavchandra:wquHZFha1cDrFqPr@learningdb.dkmrapz.mongodb.net/todo-app')

const Todo = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', Todo);

module.exports = ({
    todo
})