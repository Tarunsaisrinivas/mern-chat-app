const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
     
      useUnifiedTopology: true,

    });
    console.log(`Mongodb Connected:${conn.connection.host}`.blue);
  } catch (err) {
    console.error(err);
    process.exit();
}
};

module.exports = connectDB;
