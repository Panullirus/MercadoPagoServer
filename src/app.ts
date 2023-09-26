import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({
  origin: "*"
}));
app.use(router);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => console.log('escuchando desde =>', PORT))

const MONGO_URL: string = `mongodb+srv://yahir:${process.env.MONGO_PASS}@comerce.9nrrlhl.mongodb.net/?retryWrites=true&w=majority`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error))