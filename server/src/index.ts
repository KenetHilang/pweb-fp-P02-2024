import express from "express";
import connectDB from "./db-connection";
import cors from "cors";
import adminRouter from "./routes/admin.route";


const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send('Hi Ges');
});

app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});