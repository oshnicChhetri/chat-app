
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongoDb from "./db/connectDatabase.js";
import messageRoutes from "./routes/message.route.js";

const app = express();
const PORT = process.env.PORT || 5000 ;

dotenv.config();
app.use(express.json()); // to parse the incoming requests with Json payload (from req.body)
app.use(cookieParser()); // middleware to acesss cookies



// app.get("/", (req,res)=>{
//     res.send("Hello World");
   
// });
 


app.use("/api/auth/", authRoutes);
app.use("/api/messages/", messageRoutes);
app.use("/api/users/", userRoutes);

app.listen(PORT, () =>{
 connectToMongoDb();
 console.log(`server running on port ${PORT}`)
});