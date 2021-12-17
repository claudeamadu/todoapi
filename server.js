const { request, response } = require('express');
const express = require ('express');
const app = express();
// importing mongoose
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');
require('dotenv').config();
const PORT = process.env.PORT || 3000
app.use(express.json());

app.get('/',(request,response)=>{
    response.status(200).json({message:"Welcome to ToDo's API"});
});

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updateById);
app.delete('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);


app.listen(PORT,()=>{
    console.log("The server is running on port",PORT);
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("Database is connected");
    })
    .catch(function(error){
        console.log(`Database not connect ${error}`,);
    });
});


