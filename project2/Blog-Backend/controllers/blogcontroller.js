const blog = require('../models/blogschema')

exports.getPosts = async(req, res, next)=>{
  const posts = await blog.find();
  res.json(posts)
}


exports.createPosts  = async(req, res, next)=>{
  console.log(req.body);
  const {_id, title, body, reactions, userId, tags} = req.body;
  const newpost = new blog ({_id, title, body, reactions, userId, tags})
  await newpost.save()
  res.status(201).json(newpost)
}

exports.deletePosts = async(req, res, next)=>{
  const {id} = req.params;
  await blog.findByIdAndDelete(id);
  res.status(201).json({_id : id})
}