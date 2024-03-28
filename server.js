const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const swagger = require("./swagger");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose.set("strictQuery", false);

dotenv.config();
const app = express();
port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.once("open", () => console.log("Connected to MongoDB"));
db.once("error", (err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

swagger(app);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
