import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://21051366:MERNuse123@recipes.0ehzcld.mongodb.net/Recipes?retryWrites=true&w=majority&appName=Recipes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

app.listen(3001, () => console.log("SERVER STARTED!"));