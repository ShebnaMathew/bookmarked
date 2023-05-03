import express = require('express');
import cors = require('cors');
import mongoose from 'mongoose';
import * as dotenv from 'dotenv-flow';

dotenv.config(); // read env vars from the relevant .env file

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_URL}`)
.then(() => console.log("Connected to db"))
.catch(console.error);

app.listen(3001, () => console.log("Server listening in on Port 3001"));

