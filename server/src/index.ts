import express from "express";
import connectDB from "./db-connection";
import cors from "cors";
import users from "./models/admin.models";


const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send('Hi Ges');
});

app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
});