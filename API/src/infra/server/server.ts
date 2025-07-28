import express from "express";
import dotenv from "dotenv";
import bookRoutes from "../../app/routes/bookRoutes";

dotenv.config();

const app = express();

app.use(express.json());


app.use("/api", bookRoutes);

export default app;
