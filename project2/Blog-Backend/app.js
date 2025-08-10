const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const blogrouter =  require("./router/blogrouter")
const app = express()

const port = 3002

const DB_PATH = "mongodb+srv://root:root@completecoding.d7khlrc.mongodb.net/blogDB?retryWrites=true&w=majority&appName=CompleteCoding" 

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use('/api/blog', blogrouter)

mongoose.connect(DB_PATH).then(() => {
  console.log("connected to mongoose")
  app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
  });
}).catch(err =>{
  console.log("error while connecting", err.message)
});