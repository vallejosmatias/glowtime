import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { __dirname } from './utils.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;
 
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));