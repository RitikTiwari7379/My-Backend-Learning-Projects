const express = require('express')
const blogrouter = express.Router()

const blogcontroller = require('../controllers/blogcontroller')

blogrouter.get("/posts" ,blogcontroller.getPosts)
blogrouter.post("/posts" ,blogcontroller.createPosts)
blogrouter.delete("/posts/:id" ,blogcontroller.deletePosts)

module.exports = blogrouter;

