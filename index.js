const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config;

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is Connected"))
  .catch((err) => console.error("Error connecting:", err));

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
