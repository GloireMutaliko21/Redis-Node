import jwt from "jsonwebtoken";

import User from "../models/user.mdl.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {

        const user = await User.findOne({ username, password });

        if (!user) {
            res.status(401).json({ error: 'Erreur pendant la connexion' });
            return;
        }
        const token = await jwt.sign(
            { userId: user._id }, 'JWT_SECRET_KEY', { expiresIn: '24h' }
        );
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json(error);
    }
};