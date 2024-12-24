import express from "express";
import connectDB from "./db-connection";
import cors from "cors";
import adminRouter from "./routes/admin.route";
import operatorRouter from "./routes/operator.route";
import authRouter from "./routes/authRoute";
import borrowRouter from "./routes/sum.route";
import { authenticateToken, authorizeRole } from "./middleware/authMiddleware"; 

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("Hi Ges");
});

app.use("/admin", authenticateToken, authorizeRole(['admin']), adminRouter);
app.use("/operator", authenticateToken, authorizeRole(['operator', 'admin']), operatorRouter);
app.use("/auth", authRouter);
app.use("/borrow", borrowRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
