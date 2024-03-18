const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "home.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Silahkan masuk ke http://localhost:${PORT}`);
});
