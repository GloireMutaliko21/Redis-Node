import express from "express";

import { getToken, login, register } from "../controllers/user.ctrl.js";

const router = express.Router();

router
    .post('/register', register)
    .post('/login', login)
    .get('/token', getToken);

export default router;