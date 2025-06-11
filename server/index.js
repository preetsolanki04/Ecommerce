const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

require('dotenv').config();

const MONGODB_URL="mongodb+srv://preetsolanki0410:Q6Q77nDaL1zyyZV1@cluster0.hgkgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
    
}))
const PORT = 5000;

app.get("/", (req, res) => {
    res.json({ msg: "This is an example" });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

//routers
app.use('/user',require('./routers/user.rotuer'));
app.use('/api',require('./routers/category.router'));
app.use('/api',require('./routers/upload'));
app.use('/api',require('./routers/product.router'));

// Get MongoDB URI from .env
console.log("MongoDB URI:", MONGODB_URL);

// Connect to MongoDB
mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });
    