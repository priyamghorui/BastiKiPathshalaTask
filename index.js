const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectdb = require("./connection/connectdb");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api endpoints
app.use("/api", router);

app.get("/", async (req, res) => {
  res.send("API Working!!");
});

connectdb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("connected...");
  });
});
