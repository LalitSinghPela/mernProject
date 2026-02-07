// const mongoose = require("mongoose");


// const connectDB = async () => {
  
//   try {
    
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected Successfully");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose"); // Change 'import' to 'require'

const connectDB = async () => {
  try {
    // This connects using the URI from your .env file
    // await mongoose.connect(process.env.MONGO_URI); 
    // console.log("MongoDB connected successfully to Atlas");
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Database: ${conn.connection.name} on ${conn.connection.host}`);
  } catch (error) {
    console.error("Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB; // Change 'export default' to 'module.exports'