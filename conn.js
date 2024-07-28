const mongoose = require("mongoose");


const val = async()=> {
  try {
    await mongoose.connect("mongodb+srv://kumawatpoornima7:poor1234@cluster0000.jjhjrmg.mongodb.net/task1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit(1);
  }
  
}

module.exports = val;
 
