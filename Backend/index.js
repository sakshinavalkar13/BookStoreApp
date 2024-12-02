// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
 
// import bookRoute from "./route/booksroute.js";

// const app = express();

// app.use(cors());
// app.use(express.json());
// dotenv.config();

// const PORT = process.env.PORT  || 4000;
// const URI = process.env.MongoDBURI;

// //connection to mongodb

// try{
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to Mongodb");
// }catch(error){
//     console.error("Error", error);
// }

// //define routes

// app.use("/book", bookRoute)

// app.listen(PORT, ()=>{
//     console.log(`Server started on  ${PORT}`);
// })



import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/booksroute.js"; // Ensure the path is correct
import userRoute from "./route/usersroute.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(cors());
app.use(express.json()); // Add JSON parsing middleware

// MongoDB Connection
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// Define Routes
app.use("/book", bookRoute); // Ensure this matches your route definition
app.use("/user", userRoute);
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});


