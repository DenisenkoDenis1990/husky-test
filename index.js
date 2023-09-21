import express from "express";
import bodyParser from "body-parser";
import Mail from "./mail.js";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send(`Requested from ${req.hostname}: Hello World`)
);
app.post("/mail", async (req, res) => {
  const { email, message } = req.body;

  return res.json({ result: await Mail.send(email, message) });
});

app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
