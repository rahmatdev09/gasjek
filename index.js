const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const SERVER_APP = process.env.SERVER_APP;

app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "home.html"));
});
app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "privacy-policy.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Silahkan masuk ke ${SERVER_APP}:${PORT}`);
});
