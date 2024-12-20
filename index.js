const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const port = process.env.port || 3000;
const staticRoutes = require("./routes/static_routes");

app.use(express.static(path.join(__dirname, "public"))); //with this express will know where the public html/css files are

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html", "index.html"));
});
app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/team.html"));
});
app.use("/", staticRoutes);

app.listen(port, () => {
  console.log("Server is running on port", port);
  console.log(`\n\nhttp://localhost:${port}\n\n`);
});
