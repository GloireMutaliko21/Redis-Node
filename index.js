import express from "express";

const app = express();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes


app.listen(8000);