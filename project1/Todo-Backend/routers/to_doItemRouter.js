const express = require('express');
const todorouter = express.Router();

const todocontroller = require('../controllers/todoItemsController');

todorouter.get('/', todocontroller.gettodoItems);
todorouter.post('/',todocontroller.createTodoItem);
todorouter.delete('/:id', todocontroller.deleteItems);
todorouter.put('/:id/completed', todocontroller.completed);

module.exports = todorouter;

