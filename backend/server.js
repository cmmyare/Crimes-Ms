import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User from './models/user.js'
import router from "./routes/user.js";
import { authenticate, authorize } from './middleware/auth.js';
dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", router);

const port = 3500;
connectDB();
app.get("/", (req, res) => {
    res.send("welcome, user!");
});


















app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "User not found" });

        if (password !== user.password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, type: user.type },
            { expiresIn: '1d' } 
        );

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Protected Route Example (Officer Dashboard)
app.get('/officer-dashboard', authenticate, authorize('officer'), (req, res) => {
    res.json({ message: "Welcome to the officer dashboard" });
});

 
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})