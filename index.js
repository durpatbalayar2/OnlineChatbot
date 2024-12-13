import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/landing.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/", (req, res) => {
  res.sendFile(__dirname + "/public/landing.html");
});

// Route for Bangalore
app.get("/meuseum/bangalore", (req, res) => {
  res.sendFile(__dirname + "/public/meuseum/bangalore.html");
});

// Route for Pune
app.get("/meuseum/pune", (req, res) => {
  res.sendFile(__dirname + "/public/meuseum/pune.html");
});

// Route for Mumbai
app.get("/meuseum/mumbai", (req, res) => {
  res.sendFile(__dirname + "/public/meuseum/mumbai.html");
});

// Route for New Delhi
app.get("/meuseum/newdelhi", (req, res) => {
  res.sendFile(__dirname + "/public/meuseum/newdelhi.html");
});

// Route for Kolkata
app.get("/meuseum/kolkata", (req, res) => {
  res.sendFile(__dirname + "/public/meuseum/kolkota.html");
});

// Route for Hyderabad
app.get("/meuseum/hyderabad", (req, res) => {
  res.sendFile(__dirname + "/public/meuseum/hyderabad.html");
});

// Route for Chennai
app.get("/meuseum/chennai", (req, res) => {
  res.sendFile(__dirname + "/public/meuseum/chennai.html");
});

app.get("/payment", (req, res) => {
  res.sendFile(__dirname + "/public/payment.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
