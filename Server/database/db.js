import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    //     res.redirect("/error");
    res.send(500);
  }
};

export default connectDB;
