const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed });
  res.json({ msg: "User registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});
module.exports = router;



// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User"); // check path

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   console.log("Login Attempt:", email); // Log 1: See if data actually arrives

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ msg: "User not found" });

//   const match = await bcrypt.compare(password, user.password);
//   console.log("Password Match Result:", match);
  
//   try {
//     const { email, password } = req.body;
//     console.log(email,password);

//     // Check fields
//     if (!email || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

    
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

  
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

   
//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ token });

//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
