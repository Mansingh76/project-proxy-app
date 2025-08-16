const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Express built-in JSON parser

// ✅ Test Route
// app.get('/', (req, res) => {
//   res.json({ message: "Hello from backend" });
// });

// ✅ Import routes
const authRoutes = require('./routes/auth');
const leaveRoutes = require('./routes/leave');
const aiRoutes = require('./routes/ai');
const chatbotRoutes = require('./routes/chatbot');
const tgRoutes = require('./routes/tg');
const authenticateToken = require('./middleware/authMiddleware'); // Import JWT Middleware

// ✅ Use Routes
app.use('/auth', authRoutes);
app.use('/leave', leaveRoutes);
app.use('/ai', aiRoutes);
app.use('/chatbot', chatbotRoutes);
app.use('/tg', tgRoutes);

// ✅ Protected Route (Requires JWT Token)
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ 
    message: "Access granted!", 
    user: req.user 
  });
});

// ✅ Global Error Handler (Catches all errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
