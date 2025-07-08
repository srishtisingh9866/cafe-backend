import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import env from 'dotenv';
env.config();
//end
const app = express();
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass= encodeURIComponent(process.env.DBPASS);

// app.use(express.json());
// mongoose.connect("mongodb://${dbuser} : ${dbpass} @localhost:27017/lpu").then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

// //mongodb atlas
// mongoose.connect(process.env.MONGODBURL).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cafe.sbvskuv.mongodb.net/?retryWrites=true&w=majority&appName=Cafe`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});
app.use("/api/users", userRouter);
