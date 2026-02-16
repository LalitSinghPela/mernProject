const mongoose = require("mongoose");

// const todoSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   title: String,
//   completed: { type: Boolean, default: false }
// });

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

 

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true,
  },

  completed: {
    type: Boolean,
    default: false,
  },

}
// , { timestamps: true }
);
 
module.exports = mongoose.model("Todo", TodoSchema);
