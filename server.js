const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');

const { register, login } = require('./src/controllers/userController');
const auth = require('./src/middleware/auth');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ TEST ROUTE
app.get('/', (req, res) => {
  res.send("API Running...");
});

// ✅ AUTH ROUTES (IMPORTANT FIX HERE)
app.post('/register', register);
app.post('/login', login);

// ❌ DO NOT ADD auth HERE for register/login

app.listen(5000, () => {
  console.log("Server running on port 5000");
});