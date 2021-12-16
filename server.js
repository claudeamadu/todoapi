const { request, response } = require('express');
const express = require ('express');
const app = express();
// importing mongoose
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');

app.use(express.json());

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updateById);
app.delete('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);


app.listen(3000,()=>{
    console.log("The server is running on port 3000");
    mongoose.connect('mongodb+srv://root:8080@cluster0.bnb2h.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("Database is connected");
    })
    .catch(function(error){
        console.log("Database not connect",error.message);
    });
});

