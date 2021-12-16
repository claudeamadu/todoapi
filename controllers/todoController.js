const todoModel = require('../models/todoModels');

async function addTodo(request,response){
try{
    const newTodo = await todoModel.create(request.body);
    response.status(200).json(newTodo);
}
    catch (error) {
        response.status(543)
        console.log('something went wrong',error.message);
    }
}

async function getAllTodo(request,response){
    try{
        const getAll = await todoModel.find();
        response.status(200).json(getAll);
    }
    catch(error){
        console.log('something went wrong',error.message);
        response.status(400)
    }
}

async function getTodoById(request,response){
    try{
        const getTodo = await todoModel.findById(request.params.todoId);
        response.status(200).json(getTodo);
    }catch (error){
        console.log('something went wrong',error.message);
        response.status(400)
    }
}

async function updateById(request,response){
    try{
        const updateTodo = await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
        response.status(200).json(updateTodo);
    }catch (error){
        console.log('something went wrong',error.message);
        response.status(400)
    }
}

async function deleteById(request,response){
    try {
        await todoModel.findByIdAndDelete(request.params.todoId);
        response.status(200).json({message:"todo deleted"});
    } catch (error) {
        console.log('something went wrong',error.message);
    }
}

module.exports = {
    addTodo,
    getAllTodo,
    updateById,
    deleteById,
    getTodoById
}