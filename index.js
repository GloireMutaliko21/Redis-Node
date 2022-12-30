import express from "express";

import db from './config/db.config.js';
import userRoute from './routes/user.routes.js'

const app = express();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(userRoute)

//Server lunch
try {
    await db;
    app.listen(8000, console.log('OK connection'));
} catch (error) {
    console.log(err.message);
}
