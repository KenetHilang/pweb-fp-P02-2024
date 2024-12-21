import express from "express";
import connectDB from "./db-connection";
import cors from "cors";
import adminRouter from "./routes/admin.route";
import operatorRouter from "./routes/operator.route";
import authRouter from "./routes/authRoute"; // Tambahkan auth router
import borrowRouter from "./routes/sum.route";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("Hi Ges");
});

app.use("/admin", adminRouter);
app.use("/operator", operatorRouter);
app.use("/auth", authRouter); // Gunakan rute autentikasi
app.use("/borrow", borrowRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});