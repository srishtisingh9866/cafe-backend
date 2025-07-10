import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cors from "cors"
dotenv.config();
const app = express();
app.use(cors())
app.use(cors())
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

mongoose .connect(
    `mongodb+srv://${dbuser}:${dbpass}@cafe.sbvskuv.mongodb.net/?retryWrites=true&w=majority&appName=Cafe`
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });

app.use("/api/users", userRouter);