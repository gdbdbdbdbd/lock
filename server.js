const express = require("express");
const app = express();

let command = "off";

app.get("/", (req, res) => {
  res.send("ESP command server running");
});

app.get("/command", (req, res) => {
  res.send(command);
});

app.get("/set/on", (req, res) => {
  command = "on";
  res.send("ON");
});

app.get("/set/off", (req, res) => {
  command = "off";
  res.send("OFF");
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
