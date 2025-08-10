const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
 _id: {
    type: String,
    required: true,
    // unique: true, 
  },
  title:{
    type: String,
    required: true
  },
  body:{
    type : String,
    required: true
  },
  reactions:{
    type: Number,
    required: true
  },
  userId:{
    type: String,
    required: true
  },
  tags:{
    type: [String],
    required: true
  }
},
 {timestamps: true}
);

module.exports = mongoose.model("Blog", blogSchema);