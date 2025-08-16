const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    // Check if token is provided
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided' });

    try {
        // Verify the token
        const verified = jwt.verify(token.replace("Bearer ", ""), 'your_secret_key');
        req.user = verified; // Attach user data to request
        next(); // Move to the next middleware
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateToken;
