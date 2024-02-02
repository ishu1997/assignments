const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shubham:B2gttCS514XibIg4@cluster0.ngrvtft.mongodb.net/Todo-db');

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    completed:Boolean
});


const Todo = mongoose.model('todos', TodoSchema);

module.exports = {
   Todo
}