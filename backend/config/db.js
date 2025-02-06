import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

//databse  connection Config
export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL, {})
    .then(() => console.log("DB Connect"));
};

// Image Storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

export const upload = multer({ storage: storage });
