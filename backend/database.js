const mongoose = require('mongoose')
mongoose.connect('mongo-url')

const Todo = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', Todo);

module.exports = ({
    todo
})
