const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MONGONNECTED === TRUE"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("Back RUNNING");
});
