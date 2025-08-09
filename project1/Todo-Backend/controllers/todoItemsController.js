const todoItem = require("../models/to_doItems");

exports.createTodoItem = async(req, res, next) =>{
  console.log(req.body);
  const {task, date } = req.body;
  const newtodoItem = new todoItem ({task,date});
  await newtodoItem.save();
  res.status(201).json(newtodoItem);
}

exports.gettodoItems = async (req, res, next) =>{
  const newtodoItem = await todoItem.find();
  res.json(newtodoItem);
}

exports.deleteItems = async(req, res, next) =>{
  const {id} = req.params;
  await todoItem.findByIdAndDelete(id);
  res.status(201).json({_id : id});
}

exports.completed = async(req, res, next) =>{
  const{id} = req.params;
  const newtodoItem = await todoItem.findById(id);
  newtodoItem.completed = true;
  await newtodoItem.save();
  res.json(newtodoItem);
}