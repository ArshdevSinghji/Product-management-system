const connectDB = require("./config/db");
connectDB();
// this
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

require("dotenv").config({path: "../.env"});
const path = require('path');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: "https://product-management-system-frontend-5snj.onrender.com",
    credentials: true,
}));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use('/api/auth', authRoutes);
app.use('/api/admin', productRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
