import express from "express";
import dotenv from "dotenv";
import bookRoutes from "../../app/routes/bookRoutes";
import {userRoutes}  from "../../app/routes/user.routes";

dotenv.config();

const app = express();

app.use(express.json());


app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);


export default app;
