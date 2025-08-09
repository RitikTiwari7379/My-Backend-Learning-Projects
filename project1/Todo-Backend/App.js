const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose =  require('mongoose');

const todoRouter =  require('./routers/to_doItemRouter');

const DB_PATH = "mongodb+srv://root:root@completecoding.d7khlrc.mongodb.net/todoDB?retryWrites=true&w=majority&appName=CompleteCoding";

const port = 3001;

app.use(express.urlencoded());
app.use(express.json())
app.use(cors());
app.use('/api/todo', todoRouter);

mongoose.connect(DB_PATH).then(() => {
   console.log("connected to mongoose");
   app.listen(port, () => {
      console.log(`server  is running on http://localhost:${port}`);
   });
}).catch(err => {
  console.log("error while connecting",err.message);
});
